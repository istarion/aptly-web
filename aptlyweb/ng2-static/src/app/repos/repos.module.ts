import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReposComponent } from './repos.component';

const routes: Routes = [
  {path: 'repos', component: ReposComponent, data: {title: 'Repositories list'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReposComponent]
})
export class ReposModule { }
