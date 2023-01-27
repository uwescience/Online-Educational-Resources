build:
	jupyter-book build --all book/

publish:
	 ghp-import -n -p -f book/_build/html

check:
	jupyter-book build book/ --builder linkcheck
