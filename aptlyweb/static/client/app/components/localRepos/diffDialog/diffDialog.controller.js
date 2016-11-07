class DiffDialogController {
  constructor(leftRepo, repos, $mdDialog) {
    'ngInject';
    var self = this;
    this.name = 'diffDialog';

    this.repos = repos;

    this.leftRepo = leftRepo;


    this.cancel = function () {
      $mdDialog.cancel();
    };
  }
}

export default DiffDialogController;
