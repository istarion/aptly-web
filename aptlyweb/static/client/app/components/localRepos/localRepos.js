import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import localReposComponent from './localRepos.component';
import {LocalReposResource, AddPkgByKeyResource, DelPkgByKeyResource} from './localRepos.service';
import SnapshotsResource from '../snapshots/snapshots.service';

let localReposModule = angular.module('localRepos', [
  uiRouter,
  ngMaterial,
])

  .component('localRepos', localReposComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('local_repos', {
        url: '/local_repos',
        component: 'localRepos',
        title: 'Local repositories'
      });
  })

  .service('LocalReposResource', LocalReposResource)
  .service('AddPkgByKeyResource', AddPkgByKeyResource)
  .service('DelPkgByKeyResource', DelPkgByKeyResource)
  .service('SnapshotsResource', SnapshotsResource)

  .name;

export default localReposModule;
