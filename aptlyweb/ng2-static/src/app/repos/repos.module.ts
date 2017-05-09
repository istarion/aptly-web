import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReposComponent } from './repos.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdIconModule, MdInputModule, MdListModule } from "@angular/material";
import { RepoPageComponent } from './repo-page/repo-page.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {path: 'repos', component: ReposComponent, data: {title: 'Repositories list'}},
  {path: 'repos/:id', component: RepoPageComponent, data: {title: 'Repository:'}}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MdInputModule, MdListModule, MdIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReposComponent, RepoPageComponent]
})
export class ReposModule { }
