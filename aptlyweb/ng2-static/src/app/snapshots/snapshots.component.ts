import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.scss']
})
export class SnapshotsComponent implements OnInit {
  @ViewChild('snapshotInput') snapshotInput: ElementRef;
  mockSnapshots: Array<object>;

  constructor() {
    let basicSnapIcon = { name: 'folder', "class": "snapshots-icon_basic" };
    let publicSnapIcon = { name: 'folder_shared', "class": "snapshots-icon_basic" };
    let addIcon = { name: 'add_circle', "class": "snapshots-icon_basic" };
    this.mockSnapshots = [
      {icon: publicSnapIcon, name: 'production-messaging-001', date: '2017-04-10', base: 'Debian Wheezy', comment: 'Some Comment'},
      {icon: publicSnapIcon, name: 'production-messaging-002', date: '2016-04-15', base: 'Debian Lenny', comment: 'Some Comment'},
      {icon: basicSnapIcon, name: 'testing-vasya', date: '2017-04-20', base: 'Debian Sid', comment: 'Testing only!'},
      {icon: basicSnapIcon, name: 'beta-msg-2017-05-01', date: '2017-05-01', base: 'Debian Sid', comment: 'Future update'},
      {icon: addIcon, name: 'Create new'}
    ]
  }

  ngOnInit() {
    this.snapshotInput.nativeElement.focus();
  }

}
