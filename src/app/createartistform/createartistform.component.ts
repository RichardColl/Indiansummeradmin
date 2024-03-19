import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../shared/artist/artist.service';
import { Artist } from '../models/artist.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createartistform',
  templateUrl: './createartistform.component.html',
  styleUrls: ['./createartistform.component.css']
})
export class CreateartistformComponent implements OnInit {

  artist = new Artist();

  returnUrl: string;
  result:string;

  constructor( private route: ActivatedRoute,  private router: Router, private artistServ: ArtistService ) {
      }

  ngOnInit() {
    this.result = "Ready to Create Artist";
  }


   register(artist: Artist): void{

               this.artistServ.save(artist)
                         .subscribe(
                             data => {
                             if (data) {
                                  this.result = "successful Create -- Artist ";
                              }
                                 this.router.navigate(['createartistform']);
                             },
                             error => {
                                this.result = "create artist  failed";
                             });


    }

}
