import { Component, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ArtistService } from '../shared/artist/artist.service';
import { Artist } from '../models/artist.model';

import { NgForm } from '@angular/forms';


import { View, PageData } from '../models/view';


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

      view$: Observable<View<PageData>>;

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


     ngOnInit(): void {
        this.view$ = this.artistService.view$;
      }






        }

