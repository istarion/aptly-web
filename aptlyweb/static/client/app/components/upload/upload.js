import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import uploadComponent from './upload.component';
import 'lf-ng-md-file-input';
import 'lf-ng-md-file-input/dist/lf-ng-md-file-input.min.css'

import {UploadPackageResource} from './upload.service';

let uploadModule = angular.module('upload', [
  uiRouter,
  ngMaterial,
  'lfNgMdFileInput'
])

  .component('upload', uploadComponent)

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('upload', {
        url: '/upload',
        component: 'upload',
        title: "Upload"
      });
  })

  .service('UploadPackageResource', UploadPackageResource)

  .name;

export default uploadModule;
