import EditRepoComponent from './editRepo/editRepo.component';
import DiffDialogComponent from '../snapshots/diffDialog/diffDialog.component';
import UploadedPackagesComponent from './uploadedPackagesDialog/uploadedPackagesDialog.component'

class LocalReposController {
  constructor($mdDialog, $mdToast, $state, LocalReposResource, SnapshotsResource, AddPkgByKeyResource,
              DelPkgByKeyResource) {
    'ngInject';
    var self = this;
    this.name = 'localRepos';
    this.LocalReposResource = LocalReposResource;
    this.local_repos = LocalReposResource.query();
    this.$mdToast = $mdToast;

    this.query = function () {
      self.local_repos = LocalReposResource.query();
    };

    this.openMenu = function (event, $mdOpenMenu) {
      if (event.which == 3) {  //Right click
        $mdOpenMenu(event);
      }
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
        self.deleteRepo(repo, $mdToast);
      })
    };


    this.showPackages = function (event, repo) {
      $state.go('packages', {srcName: repo.repoName, type: 'repo'})
      // var packagesDialog = angular.extend(PackagesDialogComponent, {
      //   parent: angular.element(document.body),
      //   targetEvent: event,
      //   clickOutsideToClose: true,
      //   fullscreen: true,
      //   locals: {
      //     repo: repo
      //   }
      // });
      // $mdDialog.show(PackagesDialogComponent);
    };


    this.diffRepo = function (event, repo) {
      var diffDialog = angular.extend(DiffDialogComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true,
        locals: {
          leftItem: repo,
          leftType: 'repo',
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
    };

    this.addPkgFromUpload = function (event, repo) {
      var addDialog = angular.extend(UploadedPackagesComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: false,
        locals: {
          repo: repo
        }
      });
      $mdDialog.show(addDialog).then(function (answer) {
      }, function (fail_answer) {
        if (fail_answer && fail_answer.data && fail_answer.data.error) {
          var toast = $mdToast.simple().textContent(fail_answer.data.error).position('top right').hideDelay(3000);
        }
        $mdToast.show(toast);
      });
    };

    this.addPkgByKeyDialog = function (event, repo) {
      var self = this;
      var addDialog = $mdDialog.prompt()
        .title('Enter package key')
        .textContent('Enter key of package like "Pall ifree-imsimonitoring 1.2.3 b43b79691fa898c2"')
        .placeholder('Package key')
        .ariaLabel('Package key')
        .targetEvent(event)
        .ok('Add package')
        .cancel('Cancel');
      $mdDialog.show(addDialog).then(function (result) {
        var answer = self.addPkgByKey(repo.Name, result, AddPkgByKeyResource, $mdToast);

      });
    };

    this.delPkgByKeyDialog = function (event, repo) {
      var self = this;
      var delDialog = $mdDialog.prompt()
        .title('Enter package key')
        .textContent('Enter key of package like "Pall ifree-imsimonitoring 1.2.3 b43b79691fa898c2"')
        .placeholder('Package key')
        .ariaLabel('Package key')
        .targetEvent(event)
        .ok('Delete package')
        .cancel('Cancel');
      $mdDialog.show(delDialog).then(function (result) {
        var answer = self.delPkgByKey(repo.Name, result, DelPkgByKeyResource, $mdToast);

      });
    };
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

  addPkgByKey(repo_name, package_key, AddPkgByKeyResource, $mdToast) {
    AddPkgByKeyResource.save({Name: repo_name, PackageRefs: [package_key]}, function (result) {
        console.log(result);
        var toast = $mdToast.simple().textContent(result).position('top right').hideDelay(3000);
        $mdToast.show(toast);
      }, function (result) {
        var toast = $mdToast.simple().textContent(result).position('top right').hideDelay(3000);
        $mdToast.show(toast);
      }
    );
  }

  delPkgByKey(repo_name, package_key, DelPkgByKeyResource, $mdToast) {
    DelPkgByKeyResource.save({Name: repo_name, PackageRefs: [package_key]}, function (result) {
        console.log(result);
        var toast = $mdToast.simple().textContent(result).position('top right').hideDelay(3000);
        $mdToast.show(toast);
      }, function (result) {
        var toast = $mdToast.simple().textContent(result).position('top right').hideDelay(3000);
        $mdToast.show(toast);
      }
    );
  }

  deleteRepo(repo, $mdToast) {
    repo.$delete(repo.Name, this.query, function(resp) {
      let toast = $mdToast.simple().textContent(resp.data).position('top right').hideDelay(7000);
      $mdToast.show(toast);
    });
  }
}

export default LocalReposController;
