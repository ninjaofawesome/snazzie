# Snazzie Website: A Simple Static Site Generator

* * *

## What is this?

Snazzie is an easy to use static site generator that uses the powers of Gulp to allow for live development reloading, asset compilation and minification as well as deployment to github pages. Its pure front end goodness designed by a front end developer, for front end developers.

## How do I get started with this?

Getting started with Snazzie is easy to use in just a few simple steps.

1. Clone or download this directory [update the remote](https://help.github.com/articles/changing-a-remote-s-url/)
2. Create your own directory on github (You will need it for step 4).
3. Change the name of your directory via the command line, like so:  `mv snazzie [YOUR DIRECTORY NAME HERE]`
4. type `npm init`.  When Snazzie initializes, enter in your directory name and use your repository location.  The rest is up to you for preferences.
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

## Does Snazzie come with any pre-loaded CSS or JS libraries?

No.  Feel free to use whatever you prefer.  You can also use CDN hosted libraries, such as [jQuery](https://developers.google.com/speed/libraries/#jquery) or [Bootstrap](http://getbootstrap.com/getting-started/).  You should put them above the commented sections for self-hosted css or js files.

## Where do I put my SCSS or other CSS files?

#### SCSS:
In the scss subdirectory.  There's a manifest called styles.scss.  You can link to any subdirectories with partials there.  In the head of your document that you require these files, you will also want to add the following right above the closing head tag.

#### CSS:
In the css subdirectory.  You can choose unminified files if you prefer, they will be compressed as your site is built.  Then include them to the commented area below.

```
<!--build:css css/styles.min.css -->
    <link rel="stylesheet" href="./css/my-file-name.css">
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