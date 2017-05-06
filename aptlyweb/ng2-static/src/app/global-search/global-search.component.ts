import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
  animations: [
  trigger('flyInOut', [
    state('flyFromLeft', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(-100%)'}))
    ])
  ])
]
})
export class GlobalSearchComponent implements OnInit {
  advancedSearch: Boolean;
  architectures: Array<object>;
  filter: object;
  findTriggered: Boolean;
  mockRows: Array<object>;
  mockCols: Array<object>;

  constructor() {
    this.advancedSearch = false;
    this.architectures = [{code: 0, name: "All"}, {code: 1, name: "i386"}, {code: 2, name: "amd64"}];
    this.filter = {
      arch: 0,
      versionOperation: '=='
    };
    this.mockCols = [
      { name: 'Container'},
      { prop: 'name', name: 'Package name'},
      { name: 'Hash'},
      { name: 'Version'}
    ];
    this.mockRows = [
      { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
            { container: 'Repository: production-messaging', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Repository: production-messaging', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-client', hash: 'LDFJlcsvLKJ34LKJ', version: '5.25'},
      { container: 'Snapshot: production-messaging-001', name: 'oracle-5.25-dev', hash: 'LDKFJkOIER23', version: '5.25'}
    ];
  }

  ngOnInit() {
  }

  find() {
    this.findTriggered = true;
  }

  searchElementActivate($event) {
    if ($event.type == 'click') {
      if ($event.column.prop == 'container') {
        alert("Go to container page (" + $event.row.container + ")");
      } else {
        alert("Go to package page (" + $event.row.name + ")");
      }
      console.log($event);
    }
  }

  getRowClass(row) {
    return {'clickable-row': true};
  }

}
