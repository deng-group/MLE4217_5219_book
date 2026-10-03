default: web

# The Wendao server that answers students' questions (a Cloudflare Tunnel to the Wendao machine).
# Testing on your computer or with share_gateway.py? Build with `make web WENDAO_API=` to use the local server.
WENDAO_API ?= https://wendao.matsci.dev

clean:
	rm -rf _build
book:
	./scripts/build_latex_pdf.sh
web:
	jupyter book build --html
	python -m pip install --quiet --no-deps "wendao>=0.3"
	python -m wendao widget install _build/html $(if $(WENDAO_API),--api $(WENDAO_API))
serve:
	jupyter book start
