import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { ITunesService } from '../services/i-tunes.service';

@Component({
  selector: 'app-i-tunes',
  templateUrl: './i-tunes.component.html',
  styleUrls: ['./i-tunes.component.css']
})
export class ITunesComponent implements OnInit {

  name!: string;
  mediaType!: string;
  results: Array<Card> = new Array();
  constructor(private ItunesService : ITunesService) {
    
   }

  ngOnInit(): void {
  }
  search(){
    let term;
    term = this.name.replace(" ", "+");
    let list = this.ItunesService.getByEntity(term,this.mediaType).subscribe(data => {
      this.results = Object.values(data)[1]; //[0]=devuelve cantidad de datos
      console.log(this.results);
    });
  }
}
