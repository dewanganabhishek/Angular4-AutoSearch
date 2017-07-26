import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailsComponent } from "./citydetail.component";
import { CityRoutingModule } from "./city-routing.module";



const appRoutes: Routes = [
  { path: 'cityDetail/:id', component: CityDetailsComponent },
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,CityRoutingModule,
  RouterModule.forRoot(
    appRoutes,
    {
      enableTracing : true
    })
    ],
  
  declarations: [ AppComponent,CityDetailsComponent ],
  bootstrap:    [ AppComponent ],
   
})
export class AppModule { }
