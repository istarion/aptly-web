import angular from 'angular';
import EditRepoComponent from './editRepo/editRepo.component';
import DiffDialogComponent from './diffDialog/diffDialog.component';

class LocalReposController {
  constructor($mdDialog, $mdToast, LocalReposResource, SnapshotsResource) {
    'ngInject';
    var self = this;
    this.name = 'localRepos';
    this.LocalReposResource = LocalReposResource;
    this.local_repos = LocalReposResource.query();

    this.query = function () {
      self.local_repos = LocalReposResource.query();
    };


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
    };


    this.createSnapshotDialog = function (event, repo) {
      var self = this;
      var snapshotDialog = $mdDialog.prompt()
        .title('Enter new snapshot name')
        .textContent('Enter unique name of new snapshot')
        .placeholder('Snapshot name')
        .ariaLabel('Snapshot name')
        .initialValue(repo.Name)
        .targetEvent(event)
        .ok('Create')
        .cancel('Cancel');
      $mdDialog.show(snapshotDialog).then(function (result) {
        var answer = self.createSnapshot(repo.Name, result, SnapshotsResource, $mdToast);

      });
    }
  };

  createSnapshot(repo_name, snapshot_name, SnapshotsResource, $mdToast) {
    SnapshotsResource.save({Name: snapshot_name},{repoName: repo_name}, function (result) {
        console.log(result);
        var toast = $mdToast.simple().textContent(result.Description).position('top right').hideDelay(3000);
        $mdToast.show(toast);
      }, function (result) {
        var toast = $mdToast.simple().textContent(result.data.error).position('top right').hideDelay(3000);
        $mdToast.show(toast);
      }
    );
  }

  deleteRepo(repo) {
    repo.$delete(repo.Name, this.query);
  }
}

export default LocalReposController;
