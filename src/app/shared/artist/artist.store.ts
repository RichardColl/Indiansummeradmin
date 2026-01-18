import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import { View, PageData, ViewData, ViewError } from '../../models/view';
import { ArtistServiceData } from '../artist.abstract.service';
import { ServiceState } from '../main-api.service';
import { ArtistCollection } from '../artist.abstract.service';
import { catchError, map, tap} from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'

  })
};

@Injectable({
  providedIn: 'root'
})
export class ArtistStore {

    public API = '//indiansummerrecordsserver.herokuapp.com';
    public ARTIST_API = this.API + '/artist';


    //the BehaviorSubject here takes the ArtistServiceData as the parameterized type it wants to emit
    //also on construction we pass it its initial value , by default at the loading of the component
    //subscribing to this BehaviorSubject the initial values below are the values emitted

    //outside of this service we do not want components or other services directly accessing the  _artistserviceData$
    //BehaviorSubject. its best practise to make it private as above and then as below declare a publically accessible
    //Observable artistDataStore$
    //reason being you don't want outside users to access and potentially use the .next()  BehaviorSubject function to emit
    //their own values or redefine  _artistserviceData$.
    //the artist service should have full control over its private BehaviorSubject and outsiders should just use the publically
    //declared Observable which they can only subscribe to and not interfere with its behaviour.

    private _artistserviceData$:BehaviorSubject<ArtistServiceData>
                           = new BehaviorSubject({
                                    artistServiceState: ServiceState.INITIAL,
                                    artistDetails: null,
                                    artistComboDetails: null,
                                    artistMonoDetails: null

      });

    artistDataStore$ = this._artistserviceData$.asObservable();


    constructor(private http: HttpClient) {

        this.getArtistByID()

     }



            getArtistByID()    {

                    this._artistserviceData$.next( {
                          ...this._artistserviceData$.value,
                                     artistServiceState: ServiceState.IN_PROGRESS
                    });

                                 return  this.http
                                      .get<ArtistCollection>(this.API + '/monoFindByArtistId/?ID=' + '62a07d186291180ad27f8669')
                                      .pipe(
                                         tap(data => {
                                             this._artistserviceData$.next({
                                                ...this._artistserviceData$.value,
                                                artistServiceState: ServiceState.SUCCESS,
                                                artistDetails: data
                                             });
                                         }),
                                         catchError(err => {
                                             this._artistserviceData$.next({
                                               ...this._artistserviceData$.value,
                                               artistServiceState: ServiceState.ERROR
                                             });
                                             return [];
                                          })
                                       )
                                       .subscribe();

                           }


                    getDefaultArtist() : Observable<ArtistServiceData> {

                                        return this.artistDataStore$;

                      }

}

