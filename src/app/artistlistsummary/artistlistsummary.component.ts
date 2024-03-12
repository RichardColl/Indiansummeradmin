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


  constructor() {

   }

  ngOnInit() {

      this.viewState$ = this.data$.pipe(pluck('artistServiceState'));
  }


}
