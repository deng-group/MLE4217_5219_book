default: web
clean:
	rm -rf _build
book:
	./scripts/build_latex_pdf.sh
web:
	uv run jupyter book build --html
serve:
	uv run jupyter book start
