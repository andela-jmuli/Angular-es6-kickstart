'use strict';

const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify = require('babelify');
const ngAnnotate = require('browserify-ngannotate');
const notify = require('gulp-notify');
const sync = require('browser-sync').create();

let interceptErrors = function (error) {
  let args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

gulp.task('browserify', ['views'],  () => {
  return browserify('./app/scripts/app.js')
    .transform(babelify, { presets: ["es2015"] })
    .transform(ngAnnotate)
    .bundle()
    .on('error', interceptErrors)
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('app.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./build/js'))
    .pipe(sync.stream());
});
