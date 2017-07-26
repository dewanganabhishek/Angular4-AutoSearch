import { Component } from '@angular/core';
import { AutoCompleService } from "./autocomplete.service";
import { Hit, AutoCompleteContent } from "./AutoCompleteContent";
import { Observable } from "rxjs/Observable";
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {Http} from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'my-app',  
  template:`    
            <div class="input-field col s12">            
                <input id="country" type="text" class="validate filter-input"  [(ngModel)]=query (keyup)=filter()>
                <label for="country">Country</label><br/><br/><nav></nav><router-outlet></router-outlet>               
            </div>
            <div class="auto-complate-warp">
                <ul class="ui-menu ui-autocomplete" *ngFor="let item of result" >
                    <li class="ui-menu-item">
                        <a (click) = select(item)> {{item.fields.city_en}}</a>
                    </li>
                </ul>
            </div>
             
        `,
    providers:[AutoCompleService],
    styleUrls:["https://code.jquery.com/jquery-1.12.4.js","https://code.jquery.com/ui/1.12.1/jquery-ui.js"]

})
export class AppComponent  { 
  name = 'Angular'; 
   public query = '';   
private result :Hit[];

constructor(private service:AutoCompleService,private router: Router) {
  }
  
filter() {
    this.result = this.service.GetSearchResult(this.query);
}

select(item:any){
    this.query = item.fields.city_en;
    var cityDetailsUrl : string = "/cityDetail/" + item.fields.city_en;
    this.router.navigate([cityDetailsUrl]);     
    this.result = [];
}

GoToDetail()
{
    alert('rediret');
    this.router.navigate(['/cityDetail/1']);     
}
 }
