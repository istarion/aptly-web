import template from './diffDialog.html';
import controller from './diffDialog.controller';
import './diffDialog.styl';

let diffDialogComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl',
  ariaLabel: 'Diff repositories/snapshots',
};

export default diffDialogComponent;
