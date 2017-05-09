import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  @ViewChild('repoInput') repoInput: ElementRef;
  mockRepos: Array<object>;

  constructor() {
    let basicRepoIcon = { name: 'folder', "class": "repo-icon_basic" };
    let publicRepoIcon = { name: 'folder_shared', "class": "repo-icon_basic" };
    let addIcon = { name: 'add_circle', "class": "repo-icon_basic" };
    this.mockRepos = [
      {icon: publicRepoIcon, name: 'production-messaging', date: '2017-04-10', base: 'Debian Wheezy', comment: 'Some Comment'},
      {icon: publicRepoIcon, name: 'old-messaging', date: '2016-03-10', base: 'Debian Lenny', comment: 'Some Comment'},
      {icon: publicRepoIcon, name: 'testing-messaging', date: '2017-04-20', base: 'Debian Sid', comment: 'Testing only!'},
      {icon: basicRepoIcon, name: 'beta-msg', date: '2017-04-22', base: 'Debian Sid', comment: 'Future update'},
      {icon: addIcon, name: 'Create new'}
    ]
  }

  ngOnInit() {
    this.repoInput.nativeElement.focus();
  }

}
