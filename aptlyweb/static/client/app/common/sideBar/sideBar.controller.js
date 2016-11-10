class SideBarController {
  constructor($mdSidenav, $mdMedia) {
    'ngInject';
    this.name = 'sideBar';

    this.toggle = function () {
      if (!$mdMedia('gt-sm')) {
        $mdSidenav('left').toggle();
      }
    }
  }
}

export default SideBarController;
