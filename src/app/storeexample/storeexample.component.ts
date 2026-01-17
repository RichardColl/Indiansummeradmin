import { Component, OnInit } from '@angular/core';

import { TrackStore } from '../shared/track/track.store';

import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { ServiceState } from '../shared/main-api.service';
import { TrackData } from '../shared/track.abstract.service';

import { TrackServiceData } from '../shared/track.abstract.service';

@Component({
  selector: 'storeexample',
  templateUrl: './storeexample.component.html',
  styleUrls: ['./storeexample.component.css']
})

export class StoreexampleComponent implements OnInit {

  collection = { count: 6, data: [] };
  thedata:any;
  result = [];
  ServiceStateEnum = ServiceState;
  trackDetails: TrackData;


 tracks$: Observable<TrackServiceData>;

  constructor(private trackStore: TrackStore) {

  }

  ngOnInit() {

      this.reloadTracks();
  }

  reloadTracks() {

      this.tracks$ = this.trackStore.getDefaultTrack();

      this.tracks$.pipe(
                     map(({ trackServiceState, trackDetails }) => {

                     if(trackServiceState === this.ServiceStateEnum.SUCCESS) {
                       this.thedata = trackDetails;
                       console.log("&&&&&&&&&&&&&&&&");
                       console.log(trackDetails);

                     }
                     console.log("***********************");

                     })
                );

  }

}
