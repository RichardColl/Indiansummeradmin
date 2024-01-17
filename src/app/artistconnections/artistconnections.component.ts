import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ArtistService } from '../shared/artist/artist.service';
import { Artist } from '../models/artist.model';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-artistconnections',
  templateUrl: './artistconnections.component.html',
  styleUrls: ['./artistconnections.component.css']
})



export class ArtistconnectionsComponent implements OnInit {

      sub: Subscription;
      releases: Array<any>;
      artistid: string;
      artist: any = {};
      artistconnections: Array<any>;
      imgurl: string;
      history: string;
      theid: string;

      href: string;

      editartist = new Artist();

      returnUrl: string;

    constructor(private route: ActivatedRoute, private router: Router, private artistService: ArtistService) { }

     update(form: NgForm): void{

               this.artistService.updateconnection(form)
                     .subscribe(
                            data => {
                                 this.router.navigate([this.returnUrl]);
                                          },
                                          error => {
                                             // this.alertService.error(error);
                                             // this.loading = false;
                                          });

     }


    ngOnInit() {

               this.sub = this.route.params.subscribe(params => {
                     const id = params['artistid'];
                     this.theid = params['artistid'];
               //      alert(id);
                     if (id) {
                       this.artistService.get(id).subscribe((artist: any) => {
                         if (artist) {
                           this.artist = artist;
                           this.artist.id = id;
                           this.artist.href = artist._links.self.href;
                 //          alert(this.car.frontcoverimage);
                          this.imgurl = "https://indiansummerrecordsserver.herokuapp.com/images/" + this.artist.menuimage;
                         // this.history = this.artist.history;

                         } else {
                           console.log(`Car with id '${id}' not found, returning to list`);

                         }
                       });
                     }
                   });




    }
    }
