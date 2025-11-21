import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ArtistService } from '../shared/artist/artist.service';
import { AdminDispatcher, AdminType } from '../shared/utils/listener.service';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { ServiceState } from '../shared/main-api.service';
import { ArtistData } from '../shared/artist.abstract.service';



import { ArtistServiceData } from '../shared/artist.abstract.service';



@Component({
  selector: 'artistscontainer',
  templateUrl: './artistscontainer.component.html',
  styleUrls: ['./artistscontainer.component.css']
})
export class ArtistscontainerComponent implements OnInit {

      collection = { count: 6, data: [] };
      thedata:any;
      result = [];

      ServiceStateEnum = ServiceState;



  constructor(private artistService: ArtistService,  private readonly adminDispatcher: AdminDispatcher) {


  }

  displayArtistsOptionsState$:Observable<ServiceState>
          = this.artistService.serviceData$.pipe(
            map(({ artistServiceState, artistDetails }) => {

            if(artistServiceState === this.ServiceStateEnum.SUCCESS) {
              this.thedata = artistDetails;
              this.collection.data = this.thedata._embedded.artists;
              this.result.push(this.collection.data[this.randomInteger(10, 50, 60)]);

            }

            return artistServiceState;
            })
          );

        artistDetails: ArtistData;

      readonly viewData$ = this.artistService.serviceData$.pipe(

            map(response => {


            } ),
             tap(model => {

                           this.adminDispatcher.dispatch(
                               AdminType.ARTIST_LIST,
                               model as ArtistServiceData
                           );
              })
           ) as Observable<ArtistServiceData>;


  ngOnInit() {

     this.artistService.getArtistsByDisplay();

  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
