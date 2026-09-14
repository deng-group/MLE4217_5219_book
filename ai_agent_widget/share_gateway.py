#!/usr/bin/env python3
"""Temporary same-origin gateway for sharing the built book and its API widget."""

from __future__ import annotations

import hmac
import json
import os
from http import cookies
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib import error, parse, request


BOOK_ROOT = Path(__file__).resolve().parents[1]
BUILD_HTML = BOOK_ROOT / "_build" / "html"
BACKEND_BASE = os.environ.get("MLE_BACKEND_BASE", "http://127.0.0.1:5055").rstrip("/")
ACCESS_CODE = os.environ.get("SHARE_ACCESS_CODE", "")
COOKIE_NAME = "mle_preview_access"


class ShareHandler(SimpleHTTPRequestHandler):
    server_version = "MLEPreview/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BUILD_HTML), **kwargs)

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "same-origin")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def has_access(self) -> bool:
        raw_cookie = self.headers.get("Cookie", "")
        jar = cookies.SimpleCookie()
        try:
            jar.load(raw_cookie)
        except cookies.CookieError:
            return False
        supplied = jar.get(COOKIE_NAME)
        return bool(supplied and hmac.compare_digest(supplied.value, ACCESS_CODE))

    def accept_code_from_url(self) -> bool:
        parsed = parse.urlsplit(self.path)
        query = parse.parse_qs(parsed.query)
        supplied = query.get("code", [""])[0]
        if not supplied or not hmac.compare_digest(supplied, ACCESS_CODE):
            return False

        clean_query = parse.urlencode(
            [(key, value) for key, values in query.items() if key != "code" for value in values]
        )
        destination = parse.urlunsplit(("", "", parsed.path or "/", clean_query, parsed.fragment))
        self.send_response(302)
        self.send_header(
            "Set-Cookie",
            f"{COOKIE_NAME}={ACCESS_CODE}; Path=/; HttpOnly; Secure; SameSite=Lax",
        )
        self.send_header("Location", destination)
        self.end_headers()
        return True

    def require_access(self) -> bool:
        if self.accept_code_from_url() or self.has_access():
            return True
        body = "Access code required. Open the complete preview link sent by the course owner."
        self.send_response(401)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body.encode("utf-8"))))
        self.end_headers()
        self.wfile.write(body.encode("utf-8"))
        return False

    def do_GET(self) -> None:
        if not self.require_access():
            return
        path = parse.urlsplit(self.path).path
        if path == "/api/health":
            self.proxy_request("GET")
            return
        if path.startswith("/api/"):
            self.send_error(404)
            return
        super().do_GET()

    def do_POST(self) -> None:
        if not self.require_access():
            return
        if parse.urlsplit(self.path).path not in {"/api/answer", "/api/answer/stream"}:
            self.send_error(404)
            return
        self.proxy_request("POST")

    def proxy_request(self, method: str) -> None:
        path = parse.urlsplit(self.path).path
        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length) if length else None
        upstream = request.Request(
            f"{BACKEND_BASE}{path}",
            data=body,
            headers={"Content-Type": self.headers.get("Content-Type", "application/json")},
            method=method,
        )
        try:
            with request.urlopen(upstream, timeout=150) as response:
                status = response.status
                content_type = response.headers.get("Content-Type", "application/json")
                if content_type.startswith("application/x-ndjson"):
                    self.send_response(status)
                    self.send_header("Content-Type", content_type)
                    self.send_header("Cache-Control", "no-cache, no-transform")
                    self.send_header("X-Accel-Buffering", "no")
                    self.end_headers()
                    for line in response:
                        self.wfile.write(line)
                        self.wfile.flush()
                    return
                response_body = response.read()
        except error.HTTPError as exc:
            response_body = exc.read()
            status = exc.code
            content_type = exc.headers.get("Content-Type", "application/json")
        except error.URLError as exc:
            response_body = json.dumps({"ok": False, "message": f"Backend unavailable: {exc.reason}"}).encode()
            status = 502
            content_type = "application/json"

        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(response_body)))
        self.end_headers()
        self.wfile.write(response_body)


def main() -> None:
    if not ACCESS_CODE:
        raise SystemExit("Set SHARE_ACCESS_CODE before starting the sharing gateway.")
    if not BUILD_HTML.exists():
        raise SystemExit(f"Built course site not found: {BUILD_HTML}")
    server = ThreadingHTTPServer(("127.0.0.1", 8080), ShareHandler)
    print("Sharing gateway ready at http://127.0.0.1:8080", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
