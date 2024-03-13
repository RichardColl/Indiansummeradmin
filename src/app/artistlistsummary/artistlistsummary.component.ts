import { Component, OnInit, Input } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';
import { ArtistServiceData } from '../shared/artist.abstract.service';

import { AdminListener, AdminType } from '../shared/utils/listener.service';
import { ServiceState } from '../shared/main-api.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-artistlistsummary',
  templateUrl: './artistlistsummary.component.html',
  styleUrls: ['./artistlistsummary.component.css']
})
export class ArtistlistsummaryComponent implements OnInit {

  @Input()
  data$: Observable<ArtistServiceData>;

  public readonly ServiceState = ServiceState;

  public viewState$: Observable<ServiceState>;
//by the time i get to access in html
//with
//ngIf="viewState$ | async"
//i get a null injector error , i suspect the just isn't initialised with the artist list
//maybe the listener dispatch hasn't worked correctly  and initialised
//code all there will fix later
// the code in artistcontainer which should initialised the observable
//tap(model => {
//may not be working correctly ???

  constructor() {

   }

  ngOnInit() {

      this.viewState$ = this.data$.pipe(pluck('artistServiceState'));
  }


}
