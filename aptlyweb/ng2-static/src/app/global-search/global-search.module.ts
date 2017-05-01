import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { MdInputModule, MdButtonModule, MdIconModule, MdSlideToggleModule } from '@angular/material';

import { GlobalSearchComponent } from './global-search.component';

const routes: Routes = [
  {path: 'search', component: GlobalSearchComponent, data: {title: "Global package search"}}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule, MdButtonModule, MdIconModule, MdSlideToggleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GlobalSearchComponent]
})
export class GlobalSearchModule { }
