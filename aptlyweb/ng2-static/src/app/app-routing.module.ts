/**
 * Created by orlan on 01.05.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { GlobalSearchModule } from './global-search/global-search.module'
import { ReposModule } from './repos/repos.module'
import { SnapshotsModule } from './snapshots/snapshots.module'

const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', loadChildren: './global-search/global-search.module#GlobalSearchModule' },
  { path: 'repos', loadChildren: './repos/repos.module#ReposModule' },
  { path: 'snapshots', loadChildren: './snapshots/snapshots.module#SnapshotsModule' }
];

@NgModule({
  imports: [
    GlobalSearchModule,
    ReposModule,
    SnapshotsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}