import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffComponent } from './diff.component';
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdInputModule } from "@angular/material";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

const routes: Routes = [
  {path: 'diff/:leftContainerType/:leftName/:rightContainerType/:rightName', component: DiffComponent, data: {title: "Diff"}}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdInputModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiffComponent]
})
export class DiffModule { }
