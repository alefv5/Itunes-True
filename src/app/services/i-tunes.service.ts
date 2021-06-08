import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ITunesService {

  private url : string = "https://itunes.apple.com/search?";
  constructor(private http : HttpClient) { }

  getArtist(name: string, entity: string){
    let params = [];
    params.push('term='+name);
    params.push('entity='+entity);
    let url = this.url + params.join('&');
    console.log(url);
    return this.http.get(url);
  }
}
