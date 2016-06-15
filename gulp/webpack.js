'use strict';

const gulp = require('gulp');
const webpack = require('gulp-webpack');
const sync = require('browser-sync').create();

let config = {
  entry: {
    vendors: [
      'angular-material',
      'angular-material/angular-material.css',
    ]
  },
  watch: false,
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "css-loader"
    }, {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }]
  },
  output: {
    filename: 'app.js',
  }
};


gulp.task('webpack', () => {
  return gulp.src('./app/scripts/app.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('./build/js'))
    .pipe(sync.stream());
});
