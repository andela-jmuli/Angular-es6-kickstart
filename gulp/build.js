'use strict';
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const merge = require('merge-stream');

gulp.task('build', ['jade','bower-prod' ,'browserify'],  () => {
  let html = gulp.src("build/index.html")
    .pipe(gulp.dest('./public/'));

  let js = gulp.src("build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));

  return merge(html, js);
});