#!/usr/bin/env sh
set -eu

marker="$(mktemp "${TMPDIR:-/tmp}/myst-pdf-build.XXXXXX")"

uv run jupyter book build --pdf || true

tex_file=""
for candidate in $(find _build/temp -path '*/book.tex' -type f -newer "$marker" -print); do
  if [ -z "$tex_file" ] || [ "$candidate" -nt "$tex_file" ]; then
    tex_file="$candidate"
  fi
done
rm -f "$marker"

if [ -z "$tex_file" ]; then
  echo "No generated book.tex found under _build/temp." >&2
  exit 1
fi

tex_dir="$(dirname "$tex_file")"

awk '{ print } /\\usepackage\{url\}/ {
  print "\\usepackage{fvextra}"
  print "\\DefineVerbatimEnvironment{verbatim}{Verbatim}{breaklines=true,breakanywhere=true,fontsize=\\small}"
}' "$tex_dir/book.tex" > "$tex_dir/book.wrapped.tex"
mv "$tex_dir/book.wrapped.tex" "$tex_dir/book.tex"

for chapter_file in "$tex_dir"/book-*.index.tex "$tex_dir"/book-syllabus.tex "$tex_dir"/book-calendar.tex; do
  if [ -f "$chapter_file" ]; then
    sed -i.bak '1s/^\\section{/\\chapter{/' "$chapter_file"
    rm -f "$chapter_file.bak"
  fi
done

(
  cd "$tex_dir"
  pdflatex -interaction=nonstopmode -halt-on-error book.tex
  pdflatex -interaction=nonstopmode -halt-on-error book.tex
)

mkdir -p exports
cp "$tex_dir/book.pdf" exports/book.pdf
echo "PDF exported to exports/book.pdf"
