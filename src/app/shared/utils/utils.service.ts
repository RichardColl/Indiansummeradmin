import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import { View, PageData, ViewData, ViewError } from '../../models/view';
import { TrackServiceData } from '../utils.abstract.service';
import { ServiceState } from '../main-api.service';
import { TrackData } from '../utils.abstract.service';
import { catchError, map, tap} from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'

  })
};

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

    public API = '//indiansummerrecordsserver.herokuapp.com';
    public TRACK_API = this.API + '/track';


    private _trackData$:BehaviorSubject<TrackServiceData>
                  = new BehaviorSubject({
                        trackServiceState: ServiceState.INITIAL,
                        trackDetails: {id: '',
                                       title: '',
                                              musicReleaseId: '',
                                              length: ''
                                              }

    });

    trackData$ = this._trackData$.asObservable();

    constructor(private http: HttpClient) { }

    getMusicReleaseId(id: string)    {

               this._trackData$.next( {
                      ...this._trackData$.value,
                      trackServiceState: ServiceState.IN_PROGRESS
               });

               return  this.http
                        .get<TrackData>(this.TRACK_API + '/'  + 'search/findByMusicreleaseid?musicReleaseId='  + id, httpOptions)
                            .pipe(
                                   tap(data => {
                                        this._trackData$.next({
                                              ...this._trackData$.value,
                                              trackServiceState: ServiceState.SUCCESS,
                                              trackDetails: data
                                        });
                                   }),
                                   catchError(err => {
                                             this._trackData$.next({
                                             ...this._trackData$.value,
                                             trackServiceState: ServiceState.ERROR
                                             });
                                              return [];
                                   })
                             )
                            .subscribe();

                        }
 }
