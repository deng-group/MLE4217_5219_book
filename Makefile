default: web
clean:
	rm -rf _build
book:
	./scripts/build_latex_pdf.sh
web:
	jupyter book build --html
	uvx --from "wendao>=0.3" wendao widget install _build/html
serve:
	jupyter book start
