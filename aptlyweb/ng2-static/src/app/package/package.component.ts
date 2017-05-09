import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  packageName: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.packageName = this.route.snapshot.params.id;
    this.route.snapshot.data.title = 'Package: ' + this.packageName;
  }

}
