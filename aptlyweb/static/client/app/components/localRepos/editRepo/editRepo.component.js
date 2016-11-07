import template from './editRepo.html';
import controller from './editRepo.controller';
import './editRepo.styl';

let editRepoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl',
  ariaLabel: 'Edit repository',
};

export default editRepoComponent;
