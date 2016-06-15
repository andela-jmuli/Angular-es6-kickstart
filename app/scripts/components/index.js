import angular from 'angular';
import homeComponent from './home';

let componentsModule = angular.module('app.components', []);

componentsModule.component('homeView', homeComponent);

export default componentsModule;
