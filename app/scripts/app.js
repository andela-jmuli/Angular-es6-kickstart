import angular from 'angular';

// Import css files

import 'angular-material/angular-material.css';

// import angular componet router
import 'ngcomponentrouter';

// Import angular material
import 'angular-material';

// import styling files
import './styles';

// Import templates
import './config/app.templates';
// Import app functionality
import './components';
import './services';
import './filters';
import './router';

const requires = [
  'templates',
  'app.router',
  'ngMaterial',
  'ngComponentRouter',
  'app.components',
  'app.services',
  'app.filters'
];


// Define the main angular app module
window.app = angular.module('app', requires);

window.app.value('$routerRootComponent', 'appView');


angular.bootstrap(document, ['app'], {
  strictDi: true
});
