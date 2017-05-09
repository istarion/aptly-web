import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-repo-page',
  templateUrl: './repo-page.component.html',
  styleUrls: ['./repo-page.component.scss']
})
export class RepoPageComponent implements OnInit {
  repoName: String;
  mockRows: Array<object>;
  mockCols: Array<object>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.mockRows = [
      {
        container: 'production-messaging',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'stub01',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
            {
        container: 'production-messaging',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'stub01',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
            {
        container: 'production-messaging',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'stub01',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
            {
        container: 'production-messaging',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'stub01',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
            {
        container: 'production-messaging',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container: 'production-messaging-001',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container: 'stub01',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
    ];
  }

  ngOnInit() {
    this.repoName = this.route.snapshot.params.id;
    this.route.snapshot.data.title = 'Repository: ' + this.repoName;

    this.mockCols = [
      {prop: 'name', name: 'Package name'},
      {name: 'Version'}
    ];

  }

  getRowClass(row) {
    return {'clickable-row': true};
  }

  goToPackage($event) {
    this.router.navigate(['/package/', $event.row.name]);
  }

}
