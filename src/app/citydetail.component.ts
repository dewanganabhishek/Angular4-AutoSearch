import { Component, OnInit } from '@angular/core';
import { CityServiceService } from "./city.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
selector:'city-detail',
template:`<br/>
your city is {{cityName}}`,
providers:[CityServiceService],

})

export class CityDetailsComponent implements OnInit 
{   
    public cityName:string;
    constructor(private cityservice:CityServiceService,private activatedRoute: ActivatedRoute){          
    }

    ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        //let userId = params['id'];
         this.cityName = params['id'];
      });
  }
}