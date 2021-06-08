import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Card } from '../models/card';
@Injectable({
  providedIn: 'root'
})
export class ITunesService {
  //arreglar para all
  private url : string = "https://itunes.apple.com/search?";
  constructor(private http : HttpClient) { }

    getByEntity(name: string, entity: string){
    let cardsList: Array<Card> = new Array();
    let list = this.http.get(this.joinUrl(name, entity));
    list.toPromise().then(data=>{
      //this.data = Object.values(data)[1];
    });
    return list;
  }

  joinUrl(name: string, entity: string){
    let params = [];
    params.push('term='+name);
    params.push('entity='+entity);
    let url = this.url + params.join('&');
    return url;
  }  

  private parse(json: any) {
    return new Card(
      json.artworkUrl100,
      json.artistName,
      json.trackName,
      json.collectionPrice
      );
  }
}
