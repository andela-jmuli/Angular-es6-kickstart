import angular from 'angular';
import component from './router-component';

const routerComponent =  angular.module('app.router',[]);

routerComponent.component('appView', component);


export default routerComponent;