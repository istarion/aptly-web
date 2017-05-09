import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SnapshotsComponent } from './snapshots.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdIconModule, MdInputModule, MdListModule } from "@angular/material";
import { SnapshotPageComponent } from './snapshot-page/snapshot-page.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

const routes: Routes = [
  {path: 'snapshots', component: SnapshotsComponent, data: {title: 'Snapshots list'}},
  {path: 'snapshots/:id', component: SnapshotPageComponent, data: {title: 'Snapshot:'}}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MdInputModule, MdListModule, MdIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SnapshotsComponent, SnapshotPageComponent]
})
export class SnapshotsModule { }
