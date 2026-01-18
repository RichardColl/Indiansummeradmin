import { Component, OnInit } from '@angular/core';

import { TrackStore } from '../shared/track/track.store';
import { ArtistStore } from '../shared/artist/artist.store';

import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { ServiceState } from '../shared/main-api.service';
import { TrackData } from '../shared/track.abstract.service';
import { ArtistData } from '../shared/artist.abstract.service';
import { TrackServiceData } from '../shared/track.abstract.service';

@Component({
  selector: 'storeexample',
  templateUrl: './storeexample.component.html',
  styleUrls: ['./storeexample.component.css']
})

export class StoreexampleComponent implements OnInit {

  collection = { count: 6, data: [] };
  thedata:any;
  theartistdata:any;
  result = [];
  ServiceStateEnum = ServiceState;
  trackDetails: TrackData;
  artistDetails: ArtistData;


displayTrackStoreOptionsState$:Observable<ServiceState>;

displayArtistStoreOptionsState$:Observable<ServiceState>;


  constructor(private trackStore: TrackStore, private artistStore: ArtistStore) {

  }

  ngOnInit() {

      this.reloadTracks();
      this.reloadDefaultArtist();
  }

  reloadTracks() {

      this.displayTrackStoreOptionsState$ = this.trackStore.getDefaultTrack().pipe(map(({ trackServiceState, trackDetails }) => {

      if(trackServiceState === this.ServiceStateEnum.SUCCESS) {
                this.thedata = trackDetails;

         }
            return trackServiceState;
       })
       );

  }


  reloadDefaultArtist() {

        this.displayArtistStoreOptionsState$ = this.artistStore.getDefaultArtist().pipe(map(({ artistServiceState, artistDetails }) => {

        if(artistServiceState === this.ServiceStateEnum.SUCCESS) {
                  this.theartistdata = artistDetails;

           }
              return artistServiceState;
         })
         );

    }


}
