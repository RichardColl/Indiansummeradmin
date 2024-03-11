import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ArtistService } from '../shared/artist/artist.service';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
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

  constructor(private artistService: ArtistService) { }

  displayArtistsOptionsState$:Observable<ServiceState>
          = this.artistService.serviceData$.pipe(
            map(({ artistServiceState, artistDetails }) => {

            if(artistServiceState === this.ServiceStateEnum.SUCCESS) {
              this.thedata = artistDetails;
              this.collection.data = this.thedata._embedded.artists;
              this.result.push(this.collection.data[this.randomInteger(10, 50)]);

            }

            return artistServiceState;
            })
          );

        artistDetails: ArtistData;

  ngOnInit() {

     this.artistService.getArtistsByDisplay();

  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
