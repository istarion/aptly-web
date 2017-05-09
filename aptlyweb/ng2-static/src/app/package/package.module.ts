import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package.component';
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdIconModule, MdListModule } from "@angular/material";

const routes: Routes = [
  {path: 'package/:id', component: PackageComponent, data: {title: 'Package: '}},
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdListModule, MdIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PackageComponent]
})
export class PackageModule { }
