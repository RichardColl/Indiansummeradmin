import { Component, OnInit, Input } from '@angular/core';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';
import { TrackServiceData } from '../shared/utils.abstract.service';
import { Observable , BehaviorSubject} from 'rxjs';
import { UtilsService } from '../shared/utils/utils.service';
import { ArtistService } from '../shared/artist/artist.service';
import { AdminListener, AdminType } from '../shared/utils/listener.service';
import { ArtistServiceData } from '../shared/artist.abstract.service';

import { map } from 'rxjs/operators';
import { ServiceState } from '../shared/main-api.service';
import { ArtistData } from '../shared/artist.abstract.service';




@Component({
  selector: 'app-indiansummeradmin',
  templateUrl: './indiansummeradmin.component.html',
  styleUrls: ['./indiansummeradmin.component.css']
})
export class IndiansummeradminComponent implements OnInit {


 // private _musicid: '';
 // public headerData$: Observable<TrackServiceData>;
//  public artistsData$: Observable<ArtistServiceData>;

 // @Input()
 // public set headers(mid: '62ded9a846e6d74f4d560805') {

//      this._musicid = mid;
//      this.utilsService.getMusicReleaseId(this._musicid);
//  }

//  constructor(private utilsService: UtilsService, private readonly adminListener: AdminListener) {
//    this.setupAdminListeners();
//  }

  ServiceStateEnum = ServiceState;

  constructor(private artistService: ArtistService) {

    }

  displayArtistsOptionsState$:Observable<ServiceState>
            = this.artistService.serviceData$.pipe(
              map(({ artistServiceState, artistDetails }) => {

              return artistServiceState;
              })
            );

  //public setupAdminListeners(){

   // this.headerData$ = this.utilsService.trackData$;

    //this.artistsData$ = this.adminListener.listen(AdminType.ARTIST_LIST) as Observable<ArtistServiceData>;

 // }

  ngOnInit() {

      this.artistService.getArtistsByDisplay();
  }

}
