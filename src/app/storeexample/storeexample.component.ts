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

  tracks$: Observable<TrackServiceData>;

  constructor(private trackStore: TrackStore) {



  }

  ngOnInit() {

      this.reloadTracks();
  }

  reloadTracks() {

      this.tracks$ = this.trackStore.getDefaultTrack();

  }

}
