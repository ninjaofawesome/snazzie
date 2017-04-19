# Snazzie Website: A Simple Static Server

* * *

## What is this?

Snazzie is an easy to use static site generator that uses the powers of Gulp to allow for live development reloading, asset compilation and minification as well as deployment to github pages. Its pure front end goodness designed by a front end developer, for front end developers.

## How do I get started with this?

Getting started with Snazzie is easy to use in just a few simple steps.

1. Clone or download this directory.
2. Create your own repository.
3. cd into your cloned or downloaded directory and [update the remote](https://help.github.com/articles/changing-a-remote-s-url/)
4. type `npm init`
5. type in your information into the desired fields, replacing the default snazzie setup.

That's it!

## How do I fire this up?

`npm start`

## How do I build this thing?

`npm run build`

## How do I deploy it for the world to see?

`npm run deploy`

## Where do I put pages?

In the app directory.  If you like, you can modify the gulp task to watch a page directory, it can be found on line 66 of gulpfile.js.  However, you should leave the index page out of there as a point of entry.

## Where do I put my sass files?
In the scss subdirectory.  There's a manifest called styles.scss.  You can link to any subdirectories with partials there.  In the head of your document that you require these files, you will also want to add the following right above the closing head tag.

```
<!--build:css css/styles.min.css -->
    <link rel="stylesheet" href="./css/styles.css">
<!-- endbuild -->
```

## Where do I put any additional JS files?

In the js subdirectory.  In the body of your document that you require these files, you will also want to add the following right above the closing body tag.

```
<!--build:js js/main.min.js -->
  <script src="./js/my-file-name.js"></script>
  <script src="./js/my-other-file-name.js"></script>
<!-- endbuild -->
```