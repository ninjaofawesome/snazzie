var install = require('install')
var mkdirp = require('mkdirp');

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var ghPages = require('gulp-gh-pages');



module.exports= function(){

  //install dependencies
  installDependecies = function(){
    install('gulp, sass, browserSync, useref, uglify, gulpIf, nano, imagemin, cache, del, runSequence, ghPages', function(err){
        if(err){
          console.log('one or more of your packages did not install.  Pls check your node modules directory.')
        } else {
          console.log('Success!  Your dependencies installed.')
        }

    })
  }

  //make scaffold
  makeDirectories= function(){
    mkdirp('app/', function(err){
      if(err) {
        console.log('Something went wrong, the app dir was not made.')
      } else {
        console.log('app dir made');
      }
    });

    mkdirp('app/css', function(err){
      if(err) {
        console.log('Something went wrong, the app/css dir was not made.')
      } else {
        console.log('app/css dir made');
      }
    });

    mkdirp('app/fonts', function(err){
      if(err) {
        console.log('Something went wrong, the app/fonts dir was not made.')
      } else {
        console.log('app/fonts dir made');
      }
    });

    mkdirp('app/images', function(err){
      if(err) {
        console.log('Something went wrong, the app/images dir was not made.')
      } else {
        console.log('app/images dir made');
      }
    });

    mkdirp('app/js', function(err){
      if(err) {
        console.log('Something went wrong, the app/js dir was not made.')
      } else {
        console.log('app/js dir made');
      }
    });

    mkdirp('app/scss', function(err){
      if(err) {
        console.log('Something went wrong, the app/scss dir was not made.')
      } else {
        console.log('app/scss dir made');
      }
    });

     mkdirp('dist', function(err){
      if(err) {
        console.log('Something went wrong, the dist dir was not made.')
      } else {
        console.log('dist dir made');
      }
    });

  }


}