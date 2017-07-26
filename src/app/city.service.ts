import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Hit, AutoCompleteContent } from "./AutoCompleteContent";
import { Observable } from "rxjs/Observable";
import {URLSearchParams} from '@angular/http';

@Injectable()
export class CityServiceService {
  constructor(private http:Http) {
  }

  GetCityDetail()
  {
      return "mycity";
  }
  
}




 
