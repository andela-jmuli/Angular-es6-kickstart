'use strict';
const gulp = require('gulp');
const jade = require('gulp-jade');
const notify = require('gulp-notify');
const sync = require('browser-sync').create();
// build jade

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

gulp.task('jade',  () => {
  return gulp.src("app/index.jade")
    .pipe(jade())
    .on('error', interceptErrors)
    .pipe(gulp.dest('./build/'))
    .pipe(sync.stream());
});