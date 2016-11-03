import angular from 'angular';
import createRepo from './createRepo/createRepo'
import CreateRepoController from './createRepo/createRepo.controller';
import CreateRepoComponent from './createRepo/createRepo.component';
import CreateRepoTemplate from './createRepo/createRepo.html';

class LocalReposController {
  constructor($resource, $mdDialog) {
    'ngInject';
    var self = this;
    this.name = 'localRepos';
    this.local_repos = [];

    this.local_repos_resource = $resource('http://localhost:5001/repos/get_local_repos');
    this.local_repos_resource.query().$promise.then(function (result) {
        self.local_repos = result;
      }
    );

    this.createRepo = function (event) {
      $mdDialog.show(angular.extend(CreateRepoComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true
      })).then(function () {
        self.local_repos_resource.query();
        console.log('done');
      });
    }
  }
}

export default LocalReposController;
