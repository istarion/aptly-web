import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-material/angular-material.css'
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
  .config(($locationProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $mdThemingProvider.theme('default');
  })

  .component('app', AppComponent);
