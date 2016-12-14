import template from './uploadedPackagesDialog.html';
import controller from './uploadedPackagesDialog.controller';
import './uploadedPackagesDialog.styl';

let uploadedPackagesDialogComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default uploadedPackagesDialogComponent;
