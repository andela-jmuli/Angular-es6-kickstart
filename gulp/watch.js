'use strict';
const gulp = require('gulp');

let files = {
  views: './app/scripts/**/**.jade',
  scripts: './app/scripts/**/**.js',
  less: './app/scripts/**/**.less',
  index: './app/index.jade'
};

gulp.task('watch', () => {
  gulp.watch(files.views, ['views']);
  gulp.watch(files.scripts, ['webpack']);
  gulp.watch(files.index, ['jade']);
  gulp.watch(files.less, ['webpack']);
});
