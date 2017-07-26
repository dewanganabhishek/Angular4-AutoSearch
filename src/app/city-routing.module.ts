import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailsComponent } from "./citydetail.component";


const cityRoutes: Routes = [
  { path: 'city',  component: CityDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(cityRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CityRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/