import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Hit, AutoCompleteContent } from "./AutoCompleteContent";
import { Observable } from "rxjs/Observable";
import {URLSearchParams} from '@angular/http';

@Injectable()
export class AutoCompleService {
  //sharingData: myData=[{name:"nyks"}];  

  constructor(private http:Http) {
  }
  private baseurl : string = "https://yl7ciftkyj.execute-api.eu-west-1.amazonaws.com/Dev/city/autocomplete?"; 
   
   GetSearchResult(query:string):Hit[]
   {
        let options = {
        return: "cityid,city_en,",
        q: query + '*',
        size: "5"
    };
        let params = new URLSearchParams();        
        for(let key in options){
        params.set(key, options[key]) 
        }

        let finalResult : Hit[] = [];
        this.http.get(this.baseurl + params.toString())
            .map(res=><AutoCompleteContent>res.json())
            .subscribe(r=>
            {
                r.hits.hit.forEach(x=>{
                    finalResult.push({ id:x.id,fields:x.fields});
                });
                
            });             
        return finalResult;
   }
}




 
