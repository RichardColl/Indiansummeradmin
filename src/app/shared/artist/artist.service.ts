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
import { ArtistComboCollection } from '../artist.abstract.service';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'

  })
};

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

    public API = '//indiansummerrecordsserver.herokuapp.com';
    public ARTIST_API = this.API + '/artist';

    private _view$ = new BehaviorSubject<View<PageData>>(undefined);

    //the BehaviorSubject here takes the ArtistServiceData as the parameterized type it wants to emit
    //also on construction we pass it its initial value , by default at the loading of the component
    //subscribing to this BehaviorSubject the initial values below are the values emitted
    private _serviceData$:BehaviorSubject<ArtistServiceData>
                       = new BehaviorSubject({
                                artistServiceState: ServiceState.INITIAL,
                                artistDetails: null,
                                artistComboDetails: null

            });

    //outside of this service we do not want components or other services directly accessing the  _serviceData$
    //BehaviorSubject. its best practise to make it private as above and then as below declare a publically accessible
    //Observable
    //reason being you don't want outside users to access and potentially use the .next()  BehaviorSubject function to emit
    //their own values or redefine  _serviceData$.
    //the artist service should have full control over its private BehaviorSubject and outsiders should just use the publically
    //declared Observable which they can only subscribe to and not interfere with its behaviour.
    serviceData$ = this._serviceData$.asObservable();

    private _artistserviceData$:BehaviorSubject<ArtistServiceData>
                           = new BehaviorSubject({
                                    artistServiceState: ServiceState.INITIAL,
                                    artistDetails: null,
                                    artistComboDetails: null

      });

    artistserviceData$ = this._artistserviceData$.asObservable();

    private _artistserviceDataCombo$:BehaviorSubject<ArtistServiceData>
                               = new BehaviorSubject({
                                        artistServiceState: ServiceState.INITIAL,
                                        artistDetails: null,
                                        artistComboDetails: null

      });

    artistserviceDataCombo$ = this._artistserviceDataCombo$.asObservable();


    constructor(private http: HttpClient) { }

    get view$(): Observable<View<PageData>> {
        return this._view$.asObservable();
    }

    generateData(): void {
        const data: ViewData<PageData> = {
          data: {
            header: 'header',
            moreText: 'more text',
            text: 'text',
          }
        };

        this._view$.next(data)
      }

      generateError(): void {
        const error: ViewError = {
          error:  {
            message: 'error message',
            name: 'error name'
          }
        };

        this._view$.next(error);
      }

      generateLoading(): void {
        const viewLoader: View<PageData> = {
          loader: true
        };

        this._view$.next(viewLoader);
      }

      generateSkeletonLoading(): void {
        const viewLoader: View<PageData> = {
          loader: true,
          data: {
            header: 'XXXXX',
            moreText: 'XXXXX',
            text: 'XXXXX',
          }
        };

        this._view$.next(viewLoader);
      }

    save(artist: any): Observable<any> {

             let result: Observable<Object>;
               //   alert("ins sup");
           //     alert(supplier);
                 // if (car['href']) {
                 //   result = this.http.put(car.href, car);
                 // } else {
                    result = this.http.post(this.ARTIST_API, artist);
                 // }
          return result;
     }


     update(artist: any): Observable<any> {

             let result: Observable<Object>;

             result = this.http.put(artist.href, artist);

             return result;
     }

     updateconnection(artist: any): Observable<any> {


           return this.http.post(this.API + '/updateconnection/?artid=' + artist.id + '&conn=' + artist.connection, httpOptions);


      }

     //previous working version before using self link
     //not sure httpOptions making any difference
     updateold(id: string, artist: any): Observable<any> {

      alert("an updatezzzzz1111");

         httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummer.herokuapp.com');
         httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
         httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
         httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

         return this.http.put(this.ARTIST_API + '/' + id, artist, httpOptions);
     }

    get(id: string) {


            httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
            httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');



           return this.http.get(this.ARTIST_API + '/' + id, httpOptions);
          }

        getassociatedartists(artistid: string , thepage: string , thesize: string): Observable<any> {
          httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
                    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                        httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

              return this.http.get(this.API + '/getassociatedartistspaginated/?artid=' + artistid + '&page=' + thepage + '&size=' + thesize);
            }

        getAll(): Observable<any> {

            httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummer.herokuapp.com');
            httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

            return this.http.get(this.ARTIST_API + '/');
          }

           getAllArtistsByDisplay(): Observable<any> {
                      // don't think theses origin settings are making a difference crossorigin allow origin set
                      //in the spring boot application java
                      httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerrecords.herokuapp.com');
                      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                      httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                      httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

                      return this.http.get(this.ARTIST_API + '/'  + 'search/findAllByDisplayTrue', httpOptions);
           }



            getMonoArtistByID()    {

                    this._artistserviceData$.next( {
                          ...this._artistserviceData$.value,
                                     artistServiceState: ServiceState.IN_PROGRESS
                    });

                                 return  this.http
                                      .get<ArtistCollection>(this.API + '/monoFindByArtistId/?ID=' + '610ad22b1d23272b4f8d38e0')
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


                getComboMonoArtistByID()    {

                    this._artistserviceDataCombo$.next( {
                          ...this._artistserviceDataCombo$.value,
                                     artistServiceState: ServiceState.IN_PROGRESS
                    });

                                 return  this.http
                                      .get<ArtistComboCollection>(this.API + '/monoComboFindByArtistId/?ID=' + '629f37d5213d455896391720')
                                      .pipe(
                                         tap(data => {
                                             this._artistserviceDataCombo$.next({
                                                ...this._artistserviceDataCombo$.value,
                                                artistServiceState: ServiceState.SUCCESS,
                                                artistComboDetails: data
                                             });
                                         }),
                                         catchError(err => {
                                             this._artistserviceDataCombo$.next({
                                               ...this._artistserviceDataCombo$.value,
                                               artistServiceState: ServiceState.ERROR
                                             });
                                             return [];
                                          })
                                       )
                                       .subscribe();

             }

            //_serviceData$ will use the next() func to emit and initial IN_PROGRESS service state and null value
            //to any component that subscribes
            //this state/value is pushed to the Observable  in the component and using the async pipe syntax
            //in the component template we use ngfor to check for the service state and display a spinner while
            //it is still in the IN_PROGRESS state.
            //as you can see below we subscribe to the http clients get returned Observable
            //and use the rxjs pipe and chained funcs to emit the json artist object
            //we  also use async pipe technique to check for the ServiceStateEnum.SUCCESS and display the object array in this case
            //we do that once the http Client get returns a value we then call next() on the value with a SUCCESS state
            //if we catch an error we emit a ServiceState.ERROR which the async pipe technique allows us to check for

             getArtistsByDisplay()    {

                     this._serviceData$.next( {
                         ...this._serviceData$.value,
                         artistServiceState: ServiceState.IN_PROGRESS
                     });

                     return  this.http
                          .get<ArtistCollection>(this.ARTIST_API + '/'  + 'search/findAllByDisplayTrue', httpOptions)
                          .pipe(
                             tap(data => {
                                 this._serviceData$.next({
                                    ...this._serviceData$.value,
                                    artistServiceState: ServiceState.SUCCESS,
                                    artistDetails: data
                                 });
                             }),
                             catchError(err => {
                                 this._serviceData$.next({
                                   ...this._serviceData$.value,
                                   artistServiceState: ServiceState.ERROR
                                 });
                                 return [];
                              })
                           )
                           .subscribe();

               }


}
