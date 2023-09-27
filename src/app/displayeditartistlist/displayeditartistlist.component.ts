import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ArtistService } from '../shared/artist/artist.service';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ServiceState } from '../shared/main-api.service';
import { ArtistData } from '../shared/artist.abstract.service';
import { ArtistServiceData } from '../shared/artist.abstract.service';


@Component({
  selector: 'app-displayeditartistlist',
  templateUrl: './displayeditartistlist.component.html',
  styleUrls: ['./displayeditartistlist.component.css']
})
export class DisplayeditartistlistComponent implements OnInit {


    releases: Array<any>;
    releaseid: string;

    config: any;
    collection = { count: 6, data: [] };
    thedata:any;

  ServiceStateEnum = ServiceState;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  displayArtistsOptionsState$:Observable<ServiceState>
        = this.artistService.serviceData$.pipe(
          map(({ artistServiceState, artistDetails }) => {
          //alert("in the map");
          if(artistServiceState === this.ServiceStateEnum.SUCCESS) {
          //alert("musicReleaseDetails successzzzz");
            this.thedata = artistDetails;
            //  const { id, title } = musicReleaseDetails;
             // alert(id);
             // alert(title);
             // alert(musicReleaseDetails);
           //console.log("the array " + musicReleaseDetails.toString());
          // alert(musicReleaseDetails._embedded.musicReleases[0].artistid);
          }

          return artistServiceState;
          })
        );

      artistDetails: ArtistData;

  pageChanged(event){
          this.config.currentPage = event;
  }


  ngOnInit() {

            this.artistService.getArtistsByDisplay();


      this.config = {
                  itemsPerPage: 5,
                  currentPage: 1,
                  totalItems: this.collection.count
                };
    }
  }
