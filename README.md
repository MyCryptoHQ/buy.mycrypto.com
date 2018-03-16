# MyCrypto Simplex Integration Page

This repo houses the Simplex integration purchase page at
[buy.mycrypto.com](https://buy.mycrypto.com). The code in this repo isn't 1:1
with what's on the page, it generates a template to be used by the Simplex team.



## Running the Project

First install dependencies

```
npm install
```

Run in development and watch for file changes

```
npm start
```

Build for production

```
npm run build
```

Running either of those will generate a folder in `dist/`, which you can run by
opening `dist/index.html` in your browser.



## Project Layout

```
├── gulpfile.js  # Gulp configuration
├── src          # Source files
│   ├── data.js  # Provides variables for ejs templates
│   ├── assets   # Static assets (images, fonts etc.)
│   ├── ejs      # EJS templates, compiles to HTML
│   └── scss     # SCSS files, starting at index.scss
└── dist         # Template generated from source files
```
