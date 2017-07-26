import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CityRoutingModule } from "./city-routing.module";
import { CityServiceService } from "./city.service";
import { CityDetailsComponent } from "./citydetail.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CityRoutingModule
  ],
  declarations: [
    CityDetailsComponent,
  ],
  providers: [ CityServiceService ]
})
export class CityModule {

}