import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable , BehaviorSubject, ReplaySubject } from 'rxjs';
import { View, PageData, ViewData, ViewError } from '../../models/view';
import { TrackServiceData } from '../utils.abstract.service';
import { ServiceState } from '../main-api.service';
import { TrackData } from '../utils.abstract.service';
import { ArtistServiceData } from '../artist.abstract.service';
import { catchError, map, tap} from 'rxjs/operators';
import { cloneData } from './service.helpers';

export abstract class AdminDispatcher {
      abstract dispatch(
        type:AdminType,
        data: ArtistServiceData): void;
}


export abstract class AdminListener {
      abstract listen(
        type:AdminType) : Observable<ArtistServiceData>;
}

export enum AdminType {

      HEADER,
      ARTIST_LIST,
      MUSICRELEASE_LIST

}

@Injectable()
export class ListenerService implements AdminListener  {


        private readonly adminSubject =  new ReplaySubject<ArtistServiceData>(1);

         dispatch(
            type: AdminType,
            data: ArtistServiceData
            ) : void {

            switch(type) {
                  case AdminType.ARTIST_LIST:
                     this.adminSubject.next(data as ArtistServiceData);
                     break;
             }


          }


        listen(
          type: AdminType) : Observable<ArtistServiceData> {

              switch(type) {
                  case AdminType.ARTIST_LIST:
                      return this.adminSubject.pipe(cloneData());

              }


          }



}
