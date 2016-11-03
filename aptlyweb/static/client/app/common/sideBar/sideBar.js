import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import sideBarComponent from './sideBar.component';

let sideBarModule = angular.module('sideBar', [
  uiRouter,
  ngMaterial
])

.component('sideBar', sideBarComponent)

.name

export default sideBarModule;
