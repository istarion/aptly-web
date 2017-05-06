import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.scss']
})
export class SnapshotsComponent implements OnInit {
  mockSnapshots: Array<object>;

  constructor() {
    let basicSnapIcon = { name: 'folder', "class": "snapshots-icon_basic" };
    let publicSnapIcon = { name: 'folder_shared', "class": "snapshots-icon_basic" };
    let addIcon = { name: 'add_circle', "class": "snapshots-icon_basic" };
    this.mockSnapshots = [
      {icon: publicSnapIcon, name: 'production-messaging', date: '2017-04-10', base: 'Debian Wheezy', comment: 'Some Comment'},
      {icon: publicSnapIcon, name: 'old-messaging', date: '2016-03-10', base: 'Debian Lenny', comment: 'Some Comment'},
      {icon: basicSnapIcon, name: 'testing-messaging', date: '2017-04-20', base: 'Debian Sid', comment: 'Testing only!'},
      {icon: basicSnapIcon, name: 'beta-msg', date: '2017-04-22', base: 'Debian Sid', comment: 'Future update'},
      {icon: addIcon, name: 'Add new'}
    ]
  }

  ngOnInit() {
  }

}
