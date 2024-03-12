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

  constructor(private artistService: ArtistService, private readonly adminDispatcher: AdminDispatcher) { }


  displayArtistsOptionsState$:Observable<ServiceState>
          = this.artistService.serviceData$.pipe(
            map(({ artistServiceState, artistDetails }) => {
            //alert("in the map");
            if(artistServiceState === this.ServiceStateEnum.SUCCESS) {
            //alert("musicReleaseDetails successzzzz");
            //  this.thedata = artistDetails;
              //this.collection.data = data._embedded.artists;
              //this.thedata = artistDetails.theartists;
              this.thedata = artistDetails;
              this.collection.data = this.thedata._embedded.artists;

              //  const { id, title } = musicReleaseDetails;
               // alert(id);
               // alert(title);
               var i = 0;
               // alert(musicReleaseDetails);
             //console.log("the array " + musicReleaseDetails.toString());
            // alert(musicReleaseDetails._embedded.musicReleases[0].artistid);
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
