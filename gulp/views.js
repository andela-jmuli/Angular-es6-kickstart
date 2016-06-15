
'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const sync = require('browser-sync').create();


let scripts = './app/scripts/**/**.jade';
let interceptErrors = function (error) {
  let args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
 plugins.notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

gulp.task('views', () => {
  return gulp.src(scripts)
    .pipe(plugins.jade())
    .pipe(plugins.angularTemplatecache({
      standalone: true
    }))
    .on('error', interceptErrors)
    .pipe(plugins.rename('app.templates.js'))
    .pipe(gulp.dest('./app/scripts/config'))
    .pipe(sync.stream());
});
