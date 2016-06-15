'use strict';
const gulp = require('gulp');

let files = {
  views: './app/scripts/**/**.jade',
  scripts: './app/scripts/**/**.js',
  index:'./app/index.jade'
};

gulp.task('watch', () => {
  gulp.watch(files.views, ['views']);
  gulp.watch(files.scripts, ['browserify']);
  gulp.watch(files.index, ['jade']);
});