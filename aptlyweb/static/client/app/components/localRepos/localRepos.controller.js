import angular from 'angular';
import CreateRepoComponent from './createRepo/createRepo.component';

class LocalReposController {
  constructor($resource, $mdDialog, $mdToast) {
    'ngInject';
    var self = this;
    this.name = 'localRepos';
    this.local_repos = [];

    this.local_repos_resource = $resource('http://localhost:5001/repos/get_local_repos');
    this.local_repos_resource.query().$promise.then(function (result) {
        self.local_repos = result;
      }, function (fail_result) {
        var toast = $mdToast.simple().textContent('Something goes wrong').position('top right').hideDelay(3000);
        $mdToast.show(toast);
        console.log(fail_result)
      }
    );

    this.createRepo = function (event) {
      $mdDialog.show(angular.extend(CreateRepoComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true
      })).then(function (answer) {
        self.local_repos.push(answer);
        console.log(answer);
      }, function (fail_answer) {
        if (fail_answer && !fail_answer.data && !fail_answer.data.error) {
          var toast = $mdToast.simple().textContent(fail_answer.data.error).position('top right').hideDelay(3000);
        }

        $mdToast.show(toast);
        console.log(fail_answer)
      });
    }
  }
}

export default LocalReposController;
