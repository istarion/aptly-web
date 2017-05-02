import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MdInputModule, MdButtonModule, MdIconModule, MdSlideToggleModule, MdCheckboxModule,
  MdSelectModule} from '@angular/material';

import { GlobalSearchComponent } from './global-search.component';

const routes: Routes = [
  {path: 'search', component: GlobalSearchComponent, data: {title: "Global package search"}}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule, MdButtonModule, MdIconModule, MdSlideToggleModule, MdCheckboxModule, MdSelectModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GlobalSearchComponent]
})
export class GlobalSearchModule { }
