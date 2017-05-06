import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SnapshotsComponent } from './snapshots.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdIconModule, MdInputModule, MdListModule } from "@angular/material";

const routes: Routes = [
  {path: 'snapshots', component: SnapshotsComponent, data: {title: 'Snapshots list'}}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdInputModule, MdListModule, MdIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SnapshotsComponent]
})
export class SnapshotsModule { }
