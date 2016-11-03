import template from './createRepo.html';
import controller from './createRepo.controller';
import './createRepo.styl';

let createRepoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl',
  ariaLabel: 'Create repository',
};

export default createRepoComponent;
