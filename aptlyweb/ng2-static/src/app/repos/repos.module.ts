import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReposComponent } from './repos.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdIconModule, MdInputModule, MdListModule } from "@angular/material";

const routes: Routes = [
  {path: 'repos', component: ReposComponent, data: {title: 'Repositories list'}}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdInputModule, MdListModule, MdIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReposComponent]
})
export class ReposModule { }
