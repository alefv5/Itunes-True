import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ITunesService {

  private url : string = "https://itunes.apple.com/search?term="
  constructor(private http : HttpClient) { }

  getArtist(name: string){
    return this.http.get(`${this.url}/${name}` )
  }
}
