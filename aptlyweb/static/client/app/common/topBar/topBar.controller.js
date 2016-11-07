import SideBar from '../sideBar/sideBar';

class TopBarController {
  constructor($mdSidenav, $transitions) {
    'ngInject';
    var self = this;
    this.name = 'topBar';
    this.title = 'Home';

    this.toggleLeft = function () {
      $mdSidenav('left').toggle();
    };

    $transitions.onFinish({}, function(transition) {
      var target_state = transition.targetState();
      console.log(target_state.params());
      if (target_state.exists())
        self.title = target_state.$state().title;
    });
  }

}


export default TopBarController;
