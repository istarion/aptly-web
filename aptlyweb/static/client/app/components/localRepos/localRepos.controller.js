import angular from 'angular';
import CreateRepoComponent from './createRepo/createRepo.component';

class LocalReposController {
  constructor($resource, $mdDialog, $mdToast, LocalReposResource) {
    'ngInject';
    var self = this;
    this.name = 'localRepos';
    this.$mdToast =$mdToast;
    this.$resource = $resource;
    this.LocalReposResource = LocalReposResource;
    this.local_repos = LocalReposResource.query();

    this.createRepo = function (event) {
      var createDialog = angular.extend(CreateRepoComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true
      });
      $mdDialog.show(createDialog).then(function (answer) {
        self.local_repos.push(answer);
      }, function (fail_answer) {
        if (fail_answer && fail_answer.data && fail_answer.data.error) {
          var toast = $mdToast.simple().textContent(fail_answer.data.error).position('top right').hideDelay(3000);
        }
        $mdToast.show(toast);
      });
    };

    this.confirmDeleteRepo = function (event, repo) {
      var confirmDialog = $mdDialog.confirm()
                          .title('Would you like to delete repository ' + repo.Name + '?')
                          .textContent('Repository will be deleted.')
                          .ariaLabel('Repository deleting dialog')
                          .targetEvent(event)
                          .ok('Yes')
                          .cancel('No');
      $mdDialog.show(confirmDialog).then(function () { //SUCCESS
        self.deleteRepo(repo);
      })
    };
  }

  deleteRepo(repo) {
    repo.$delete(repo.Name);
  }
}

export default LocalReposController;
