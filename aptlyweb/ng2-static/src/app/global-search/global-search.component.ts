import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { window } from "rxjs/operator/window";
import { Router } from "@angular/router";

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
  @ViewChild('iconTemplate') iconTemplate: TemplateRef<any>;
  @ViewChild('globalSearch') globalSearchElem: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  advancedSearch: Boolean;
  architectures: Array<object>;
  filter: object;
  findTriggered: Boolean;
  mockRows: Array<object>;
  mockCols: Array<object>;

  constructor(private router: Router) {
    this.advancedSearch = false;
    this.findTriggered = true;
    this.architectures = [{code: 0, name: "All"}, {code: 1, name: "i386"}, {code: 2, name: "amd64"}];
    this.filter = {
      arch: 0,
      versionOperation: '=='
    };
    let basicRepoIcon = {name: 'folder', "class": "repo-icon_basic"};
    let publicRepoIcon = {name: 'folder_shared', "class": "repo-icon_basic"};
    let basicSnapIcon = {name: 'folder', "class": "snapshots-icon_basic"};
    let publicSnapIcon = {name: 'folder_shared', "class": "snapshots-icon_basic"};
    this.mockRows = [
      {
        container_type: basicRepoIcon,
        container: 'production-messaging',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'production-messaging',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'production-messaging-001',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'production-messaging-001',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: publicRepoIcon,
        container: 'stub01',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: publicRepoIcon,
        container: 'stub01',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub01',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub01',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub02',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub02',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: publicSnapIcon,
        container: 'stub02',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: publicSnapIcon,
        container: 'stub02',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub03',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub03',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub03',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub03',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub04',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub04',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub04',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub04',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub05',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub05',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub05',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub05',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub06',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub06',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub06',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub06',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub07',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicRepoIcon,
        container: 'stub07',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub07',
        name: 'oracle-5.25-client',
        hash: 'LDFJlcsvLKJ34LKJ',
        version: '5.25'
      },
      {
        container_type: basicSnapIcon,
        container: 'stub07',
        name: 'oracle-5.25-dev',
        hash: 'LDKFJkOIER23',
        version: '5.25'
      },
    ];
  }

  ngOnInit() {
    this.mockCols = [
      {
        name: '&nbsp',
        prop: 'container_type',
        cellTemplate: this.iconTemplate,
        "width": 50,
        "max-width": 50,
        "canAutoResize": false
      },
      {name: 'Container'},
      {prop: 'name', name: 'Package name'},
      {name: 'Hash'},
      {name: 'Version'}
    ];
    this.searchInput.nativeElement.focus();
  }

  find() {
    this.findTriggered = true;
  }

  extendedSearchTrigger() {
    let globalSearchElem = this.globalSearchElem;
    setTimeout(function () {
      globalSearchElem.nativeElement.dispatchEvent(new Event('resize', {bubbles: true}));
    }, 300);

  }

  searchElementActivate($event) {
    if ($event.type == 'click') {
      if ($event.column.prop == 'container') {
        if ($event.row.container_type.class.startsWith("repo")) {
          this.router.navigate(['/repos/', $event.row.container]);
        } else {
          this.router.navigate(['/snapshots/', $event.row.container]);
        }
      } else {
        this.router.navigate(['/package/', $event.row.name]);
      }
      console.log($event);
    }
  }

  getRowClass(row) {
    return {'clickable-row': true};
  }

}
