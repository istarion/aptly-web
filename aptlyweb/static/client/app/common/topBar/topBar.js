import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import topBarComponent from './topBar.component';
import SideBar from '../sideBar/sideBar'

let topBarModule = angular.module('topBar', [
  uiRouter,
  SideBar,
  ngMaterial
])

.component('topBar', topBarComponent)

.name;

export default topBarModule;
