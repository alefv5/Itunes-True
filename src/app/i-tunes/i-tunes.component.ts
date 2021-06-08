import { Component, OnInit } from '@angular/core';
import { ITunesService } from '../services/i-tunes.service';

@Component({
  selector: 'app-i-tunes',
  templateUrl: './i-tunes.component.html',
  styleUrls: ['./i-tunes.component.css']
})
export class ITunesComponent implements OnInit {

  name!: string;
  constructor(private ItunesService : ITunesService) {
    
   }

  ngOnInit(): void {
  }
  search(){
    this.name = this.name.replace(" ", "+")
    this.ItunesService.getArtist(this.name).subscribe(data => {
      console.log(data)
    })
  }

}
