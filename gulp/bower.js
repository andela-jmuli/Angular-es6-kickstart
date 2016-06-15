'use strict';
const gulp = require('gulp');
const bower = require('gulp-bower');

let env = process.env.NODE_ENV = 'development';
let directory = {
  dev: './build/lib',
  prod: './public/lib'
};

gulp.task('bower-dev', () => {
  return bower({
    directory: directory.dev,
    cwd: './'
  });
});

gulp.task('bower-prod', () => {
  return bower({
    directory: directory.prod,
    cwd: './'
  });
});



