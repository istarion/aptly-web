class SideBarController {
  constructor($mdSidenav, $mdMedia) {
    'ngInject';
    this.name = 'sideBar';

    this.toggle = function () {
      if ($mdMedia('lt-md'))
      $mdSidenav('left').toggle();
    }
  }
}

export default SideBarController;
