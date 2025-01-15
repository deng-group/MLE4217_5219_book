# Jupyter Book for the course "Materials Informatics"

## How to build this book
Make sure you have installed packages in `requirements.txt`:
```shell
pip install -r requirements.txt
```
Then you can build the book using:
```
make
```
This will build the book in html format. You can view the book by opening the file `./_build/html/index.html` in a web browser.

You can also build the book in pdf format using:
```shell
make book
```
You have to [install LaTex](https://www.latex-project.org/get/), e.g. `pdflatex`, to build this book in pdf format.