import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Card } from '../models/card';
@Injectable({
  providedIn: 'root'
})
export class ITunesService {
  private url : string = "https://itunes.apple.com/search?";
  constructor(private http : HttpClient) { }

    getByEntity(name: string, entity: string) {
    let cardsList: Array<Card> = new Array();
    let list = this.http.get(this.joinUrl(name, entity));
    return list;
  }

  joinUrl(name: string, entity: string){
    let params = [];
    let url;
    if (entity != "all") {
      params.push('term='+name);
      params.push('entity='+entity);
      url = this.url + params.join('&');
    }
    else {
      params.push('term='+name);
      url = this.url + params;
    }
    return url;
  }  
}
