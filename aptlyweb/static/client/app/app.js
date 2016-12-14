import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-material/angular-material.css'
import 'material-design-lite/material.css'
import 'angular-animate';
import 'angular-aria';
import ngMaterial from 'angular-material';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngMaterial,
  ])
  .config(($mdThemingProvider) => {
    "ngInject";

    $mdThemingProvider.theme('default');
  })

  .component('app', AppComponent);
