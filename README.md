# Jupyter Book for the course "Materials Informatics"

## Building the Book in HTML format
To build this book, you need to have [Jupyter Book](https://jupyterbook.org/) installed. You can install it using pip in your Python environment:

```shell
pip install jupyter-book>=2.0.0a0
```

Then you can build the book using:
```
make
```
This will build the book in html format. You can view the book by opening the file `./_build/html/index.html` in a web browser.

## Building the Book in PDF format
You can also build the book in `pdf` format using:
```shell
make book
```
You have to [install LaTex](https://www.latex-project.org/get/), e.g. `pdflatex`, to build this book in pdf format.