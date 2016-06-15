'use strict';

const gulp = require('gulp');
const sync = require('browser-sync').create();

// require all the tasks

require('require-dir')('./gulp');


//Launch app development mode
gulp.task('default', ['bower-dev', 'jade', 'webpack', 'watch'], () => {

  sync.init(['./build/**/**.**'], {
    server: "./build",
    port: 4000,
    notify: true,
    ui: {
      port: 4001
    }
  });

});
