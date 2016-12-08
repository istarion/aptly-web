import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import globalSearchComponent from './globalSearch.component';
import {SearchResource, AdvancedSearchResource} from './globalSearch.service';

let globalSearchModule = angular.module('globalSearch', [
  uiRouter,
  ngMaterial
])

  .component('globalSearch', globalSearchComponent)

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('global_search', {
        url: '/global_search',
        component: 'globalSearch',
        title: "Global search"
      });
  })

  .service('SearchResource', SearchResource)
  .service('AdvancedSearchResource', AdvancedSearchResource)

  .name;

export default globalSearchModule;
