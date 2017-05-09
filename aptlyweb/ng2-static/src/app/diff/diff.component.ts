import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.scss']
})
export class DiffComponent implements OnInit {
  leftType: String;
  rightType: String;
  leftName: String;
  rightName: String;
  mockCols: [Object];
  mockRows: [Object];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.mockRows = [
      {
        leftName: 'oracle-client',
        leftHash: 'LDFJlcsvLKJ34LKJ',
        leftVersion: '5.24',
        rightName: 'oracle-client',
        rightHash: 'LDFJlcsvLKJ34dLKJ',
        rightVersion: '5.25',
      },
      {
        leftName: '&mdash;',
        leftHash: '&mdash;',
        leftVersion: '&mdash;',
        rightName: 'pulseaudio-ctl',
        rightHash: 'ahth1uth7ooShiu7',
        rightVersion: '1.61-1',
      },
      {
        leftName: 'python-pip',
        leftHash: 'shi9egejae9ca0Ie',
        leftVersion: '9.0.1-2',
        rightName: 'python-pip',
        rightHash: 'oyeixu4XazaeNahm',
        rightVersion: '8.0.2',
      },
      {
        leftName: 'python2-pip',
        leftHash: 'Jeeroo2hiehi7ooJ',
        leftVersion: '9.0.1-2;',
        rightName: '&mdash;',
        rightHash: '&mdash;',
        rightVersion: '&mdash;',
      },
            {
        leftName: '&mdash;',
        leftHash: '&mdash;',
        leftVersion: '&mdash;',
        rightName: 'ranger',
        rightHash: 'kotieLewu9toh4Fu',
        rightVersion: '1.8.1-1',
      },
      {
        leftName: 'subversion',
        leftHash: 'phahngae5Kaep8Ph',
        leftVersion: '1.9.0',
        rightName: 'subversion',
        rightHash: 'behohtatheiTh8as',
        rightVersion: '1.9.5-2',
      },
      {
        leftName: 'WTF-package',
        leftHash: 'Uc9och0cahghuen4',
        leftVersion: '4.8.15',
        rightName: 'WTF-package',
        rightHash: 'Mei9aibequae3roh',
        rightVersion: '4.8.15',
      },
    ]
  }

  getContainerType(abbr) {
    if (abbr == 'repo') {
      return 'Repository'
    } else {
      return 'Snapshot'
    }
  }

  getRowClass(row) {
    return {'clickable-row': true};
  }

  getCellClass(cell) {
    let self = cell.column.prop;
    let oposite;
    if (cell.column.prop.startsWith("left")) {
      oposite = "right" + self.slice(4);
    } else {
      oposite = "left" + self.slice(5);
    }
    if (cell.row[self] == "&mdash;") {
      return;
    } else if (cell.column.prop.endsWith("Hash") && cell.row[oposite] != cell.row[self]) {
      return {'red-diff': true};
    } else if (cell.row[oposite] == "&mdash;") {
      return {'green-diff': true};
    } else if (cell.row[oposite] == cell.row[self]) {
      return {};
    } else if (cell.row[oposite] > cell.row[self]){
      return {'red-diff': true};
    } else {
      return {'green-diff': true};
    }
  }

  ngOnInit() {
    this.leftType = this.route.snapshot.params.leftContainerType;
    this.rightType = this.route.snapshot.params.rightContainerType;
    this.leftName = this.route.snapshot.params.leftName;
    this.rightName = this.route.snapshot.params.rightName;

    this.route.snapshot.data.title = `${this.getContainerType(this.leftType)}[${this.leftName}] / ${this.getContainerType(this.rightType)}[${this.rightName}]`;

    this.mockCols = [
      {prop: 'leftName', name: 'Package name', cellClass: this.getCellClass},
      {prop: 'leftVersion', name: 'Version', cellClass: this.getCellClass},
      {prop: 'leftHash', name: 'Hash', cellClass: this.getCellClass},
      {prop: 'rightName', name: 'Package name', cellClass: this.getCellClass},
      {prop: 'rightVersion', name: 'Version', cellClass: this.getCellClass},
      {prop: 'rightHash', name: 'Hash', cellClass: this.getCellClass},
    ];
  }

  diffElementActivate($event) {
    if ($event.type != 'click') {
      return;
    }
    let name = $event.row.leftName;
    if (name == "&mdash;") {
      name = $event.row.rightName;
    }
    this.router.navigate(['/package/', name]);
  }

}
