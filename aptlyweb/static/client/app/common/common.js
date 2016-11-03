import angular from 'angular';
import User from './user/user';
import TopBar from './topBar/topBar';
import SideBar from './sideBar/sideBar';

let commonModule = angular.module('app.common', [
  User,
  TopBar,
  SideBar
])

.name;

export default commonModule;
