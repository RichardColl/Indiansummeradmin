import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import { TrackServiceData } from '../track.abstract.service';
import { ServiceState } from '../main-api.service';
import { TrackCollection } from '../track.abstract.service';
import { catchError, map, tap} from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'

  })
};

@Injectable({
  providedIn: 'root'
})
export class TrackStore {

    public API = '//indiansummerrecordsserver.herokuapp.com';
    public TRACK_API = this.API + '/track';


    //the BehaviorSubject here takes the TrackServiceData as the parameterized type it wants to emit
    //also on construction we pass it its initial value , by default at the loading of the component
    //subscribing to this BehaviorSubject the initial values below are the values emitted

    //outside of this service we do not want components or other services directly accessing the  _trackserviceData$
    //BehaviorSubject. its best practise to make it private as above and then as below declare a publically accessible
    //Observable
    //reason being you don't want outside users to access and potentially use the .next()  BehaviorSubject function to emit
    //their own values or redefine  _trackserviceData$.
    //the artist service should have full control over its private BehaviorSubject and outsiders should just use the publically
    //declared Observable which they can only subscribe to and not interfere with its behaviour.


    private _trackserviceData$:BehaviorSubject<TrackServiceData>
                       = new BehaviorSubject({
                             trackServiceState: ServiceState.INITIAL,
                             trackDetails: null

      });

    trackstoreData$ = this._trackserviceData$.asObservable();

    constructor(private http: HttpClient, ) {

          this.loadTrackByID("693d6f4f2aef37d30df1421a")
    }


            //_trackserviceData$ will use the next() func to emit and initial IN_PROGRESS service state and null value
            //to any component that subscribes
            //this state/value is pushed to the Observable  in the component and using the async pipe syntax
            //in the component template we use ngfor to check for the service state and display a spinner while
            //it is still in the IN_PROGRESS state.
            //as you can see below we subscribe to the http clients get returned Observable
            //and use the rxjs pipe and chained funcs to emit the json artist object
            //we  also use async pipe technique to check for the ServiceStateEnum.SUCCESS and display the object array in this case
            //we do that once the http Client get returns a value we then call next() on the value with a SUCCESS state
            //if we catch an error we emit a ServiceState.ERROR which the async pipe technique allows us to check for

             loadTrackByID(id: string)    {

                     this._trackserviceData$.next( {
                         ...this._trackserviceData$.value,
                         trackServiceState: ServiceState.IN_PROGRESS
                     });

                     return  this.http
                          .get<TrackCollection>(this.TRACK_API + '/'  + id , httpOptions)
                          .pipe(
                             tap(data => {
                                 this._trackserviceData$.next({
                                    ...this._trackserviceData$.value,
                                    trackServiceState: ServiceState.SUCCESS,
                                    trackDetails: data
                                 });
                             }),
                             catchError(err => {
                                 this._trackserviceData$.next({
                                   ...this._trackserviceData$.value,
                                   trackServiceState: ServiceState.ERROR
                                 });
                                 return [];
                              })
                           )
                           .subscribe();

               }

               getDefaultTrack() : Observable<TrackServiceData> {

                    return trackstoreData$;

               }





}
