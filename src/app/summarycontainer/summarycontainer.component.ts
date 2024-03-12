import { Component, OnInit, Input } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';
import { ArtistServiceData } from '../shared/artist.abstract.service';

import { AdminListener, AdminType } from '../shared/utils/listener.service';


@Component({
  selector: 'app-summarycontainer',
  templateUrl: './summarycontainer.component.html',
  styleUrls: ['./summarycontainer.component.css']
})
export class SummarycontainerComponent implements OnInit {

  public artistsData$: Observable<ArtistServiceData>;

    @Input()
    data$: Observable<ArtistServiceData>;


  constructor(private readonly adminListener: AdminListener) {

        this.setupAdminListeners();
   }

  ngOnInit() {

  }

   public setupAdminListeners(){

        this.artistsData$ = this.adminListener.listen(AdminType.ARTIST_LIST) as Observable<ArtistServiceData>;

    }

}
