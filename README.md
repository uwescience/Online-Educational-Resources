# eScience Online Educational Resources

This repository contains a Jupyterbook indexing the data science and computing tutorials built by eScience staff members, programs, and greater affiliates.

A live version is published at this URL:
https://uwescience.github.io/Online-Educational-Resources/

Contributions of resources or book infrastructure are very welcome from all members of the UW community. Propose them by either submitting pull requests or raising issues.

## Content editing

The content of the website is mostly stored as markdown files in the `book` directory. Non-document files like PDFs and images are stored in `resources`.

### Link tags
When adding a new resource to this book, please tag it appropriately by writing tag codes at the end of the line of text the link is on. The following tags are currently supported:

  - `{{beginner}}` Resources appropriate for beginners
  - `{{intermediate}}` Resources appropriate for intermediate users
  - `{{advanced}}` Resources appropriate for advanced users

You can add multiple tags to a link, if it is appropriate for multiple audiences.

### Publishing tools

There is a Makefile in the root directory of this repository to accomplish common website editing tasks:

- `make build`: Build the jupyterbook locally. Requires the `jupyter-book` python package (`pip install jupyter-book`)
- `make publish`: Upload the locally built jupyterbook to the live GitHub Pages webspace. Run `make build` first to make sure your changes are fully incorporated into the built website. Requires the `ghp-import` python package (`pip install ghp-import`)
- `make check`: Check the jupyterbook for dead links. Requires the `jupyter-book` python package (`pip install jupyter-book`)

You can run the above commands with a standard terminal on Linux or MacOS systems, or from within WSL on Windows.
