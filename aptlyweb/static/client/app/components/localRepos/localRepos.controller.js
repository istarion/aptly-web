import angular from 'angular';
import EditRepoComponent from './editRepo/editRepo.component';
import DiffDialogComponent from './diffDialog/diffDialog.component';

class LocalReposController {
  constructor($resource, $mdDialog, $mdToast, LocalReposResource) {
    'ngInject';
    var self = this;
    this.name = 'localRepos';
    this.$mdToast = $mdToast;
    this.$resource = $resource;
    this.LocalReposResource = LocalReposResource;
    this.local_repos = LocalReposResource.query();


    this.editRepo = function (event, repo) {
      var editDialog = angular.extend(EditRepoComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true,
        locals: {
          repo: repo
        }
      });
      $mdDialog.show(editDialog).then(function (answer) {
      }, function (fail_answer) {
        if (fail_answer && fail_answer.data && fail_answer.data.error) {
          var toast = $mdToast.simple().textContent(fail_answer.data.error).position('top right').hideDelay(3000);
        }
        $mdToast.show(toast);
      });
    };


    this.createRepo = function (event) {
      var editDialog = angular.extend(EditRepoComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true,
        locals: {
          repo: {}
        }
      });
      $mdDialog.show(editDialog).then(function (answer) {
        self.local_repos = LocalReposResource.query()
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
        .clickOutsideToClose(true)
        .ok('Yes')
        .cancel('No');
      $mdDialog.show(confirmDialog).then(function () { //SUCCESS
        self.deleteRepo(repo);
        self.local_repos = LocalReposResource.query()
      })
    };


    this.showPackages = function (event, repo) {
      var packagesDialog = angular.extend(PackagesDialogComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true,
        locals: {
          repo: repo
        }
      });
      $mdDialog.show(PackagesDialogComponent);
    };


    this.diffRepo = function (event, repo) {
      var diffDialog = angular.extend(DiffDialogComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true,
        locals: {
          leftRepo: repo,
          repos: this.local_repos
        }
      });
      $mdDialog.show(diffDialog);
    }
  };


  deleteRepo(repo) {
    repo.$delete(repo.Name);
  }
}

export default LocalReposController;
