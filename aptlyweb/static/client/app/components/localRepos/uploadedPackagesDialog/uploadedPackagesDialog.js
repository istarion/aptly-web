import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import uploadedPackagesDialogComponent from './uploadedPackagesDialog.component';
import UploadPackageResource from '../localRepos.service';

let uploadedPackagesDialogModule = angular.module('uploadedPackagesDialog', [
  uiRouter,
  ngMaterial
])

  .component('uploadedPackagesDialog', uploadedPackagesDialogComponent)

  .service('UploadPackageResource', UploadPackageResource)

  .name;

export default uploadedPackagesDialogModule;
