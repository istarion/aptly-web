import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: 'package/:id', component: PackageComponent, data: {title: 'Package: '}},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PackageComponent]
})
export class PackageModule { }
