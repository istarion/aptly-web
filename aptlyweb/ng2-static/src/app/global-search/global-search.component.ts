import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {
  advancedSearch: Boolean;

  constructor() {
    this.advancedSearch = false;
  }

  ngOnInit() {
  }

}
