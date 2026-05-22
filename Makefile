default: web
clean:
	rm -rf _build
book:
	./scripts/build_latex_pdf.sh
web:
	jupyter book build --html
	python ai_agent_widget/inject_ai_agent_widget.py
serve:
	jupyter book start
