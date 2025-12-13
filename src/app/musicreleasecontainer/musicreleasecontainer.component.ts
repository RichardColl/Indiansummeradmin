import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TrackService } from '../shared/track/track.service';

import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { ServiceState } from '../shared/main-api.service';
import { TrackData } from '../shared/track.abstract.service';



import { TrackServiceData } from '../shared/track.abstract.service';


@Component({
  selector: 'app-musicreleasecontainer',
  templateUrl: './musicreleasecontainer.component.html',
  styleUrls: ['./musicreleasecontainer.component.css']
})
export class MusicreleasecontainerComponent implements OnInit {

  collection = { count: 6, data: [] };
  thedata:any;
  result = [];

  ServiceStateEnum = ServiceState;

  constructor(private trackService: TrackService) { }


  displayTrackOptionsState$:Observable<ServiceState>
            = this.trackService.trackserviceData$.pipe(
              map(({ trackServiceState, trackDetails }) => {

              if(trackServiceState === this.ServiceStateEnum.SUCCESS) {
                this.thedata = trackDetails;

              }

              return artistServiceState;
              })
            );

          artistDetails: ArtistData;


  ngOnInit() {


      this.trackService.getArtistsByDisplay();
  }

}
