import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SnapshotsComponent } from './snapshots.component';

const routes: Routes = [
  {path: 'snapshots', component: SnapshotsComponent, data: {title: 'Snapshots list'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SnapshotsComponent]
})
export class SnapshotsModule { }
