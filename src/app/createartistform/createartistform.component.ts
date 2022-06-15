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

  constructor( private route: ActivatedRoute,  private router: Router, private artistServ: ArtistService ) {
      }

  ngOnInit() {
  }

   register(artist: Artist): void{

               this.artistServ.save(artist)
                         .subscribe(
                             data => {
                                 this.router.navigate([this.returnUrl]);
                             },
                             error => {
                                // this.alertService.error(error);
                                // this.loading = false;
                             });


    }

}
