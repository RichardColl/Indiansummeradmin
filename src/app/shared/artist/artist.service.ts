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
export class ArtistService {

    public API = '//indiansummerrecordsserver.herokuapp.com';
    public ARTIST_API = this.API + '/artist';

    private _view$ = new BehaviorSubject<View<PageData>>(undefined);

    private _serviceData$:BehaviorSubject<ArtistServiceData>
                       = new BehaviorSubject({
                                artistServiceState: ServiceState.INITIAL,
                                artistDetails: null

            });
    serviceData$ = this._serviceData$.asObservable();


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
