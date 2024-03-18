import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'

  })
};


@Injectable({
  providedIn: 'root'
})
export class MusicreleaseService {

    public API = '//indiansummerrecordsserver.herokuapp.com';
    public TENDOITEM_API = this.API + '/musicrelease';
    public ARTIST_API = this.API + '/artist';

  constructor(private http: HttpClient) { }


    get(id: string) {


          httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
          httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
              httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
              httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');



         return this.http.get(this.TENDOITEM_API + '/' + id, httpOptions);
        }


     findByArtistid(artistid: string , id: string): Observable<any> {
          httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
                    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                        httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

              //curl http://localhost:8080/musicrelease/search/findByArtistid?artistid=5924abe2734d1d6bafe3e579

              return this.http.get(this.TENDOITEM_API + '/'  + 'search/findByArtistid?artistid='  + artistid, httpOptions);
     }

    findByGenre(genre: string): Observable<any> {
              httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
                        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                            httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                            httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

                  //curl http://localhost:8080/musicrelease/search/findByArtistid?artistid=5924abe2734d1d6bafe3e579

                  return this.http.get(this.TENDOITEM_API + '/'  + 'search/findByGenresContaining?genre='  + genre, httpOptions);
         }

    findByRecentRelease(): Observable<any> {
                  httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
                            httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                                httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                                httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

                      //curl http://localhost:8080/musicrelease/search/findByArtistid?artistid=5924abe2734d1d6bafe3e579

                      return this.http.get(this.TENDOITEM_API + '/'  + 'search/findAllByOrderByReleaseaddeddateDesc', httpOptions);
             }

     findByRecentReleaseDate(): Observable<any> {
                      httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
                                httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                                    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                                    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');



                          return this.http.get(this.TENDOITEM_API + '/'  + 'search/findAllByOrderByReleasedateDesc', httpOptions);
    }



  getAll(): Observable<any> {

      httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
                      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                          httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                          httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

      return this.http.get(this.TENDOITEM_API + '/');
    }

    update(musicrelease: any): Observable<any> {

                 let result: Observable<Object>;

                 result = this.http.put(musicrelease.href, musicrelease);

                 return result;
     }

     getmusicreleases(thepage: string , thesize: string): Observable<any> {
               httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerclient.herokuapp.com');
                         httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                             httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                             httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

                   return this.http.get(this.API + '/getmusicreleasespaginatedbyreleaseaddeddate/?page=' + thepage + '&size=' + thesize);
      }


     getAllMusicReleasesByDisplay(): Observable<any> {
                          // don't think theses origin settings are making a difference crossorigin allow origin set
                          //in the spring boot application java
                          httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummerrecords.herokuapp.com');
                          httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                          httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                          httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

                          return this.http.get(this.TENDOITEM_API + '/'  + 'search/findAllByDisplayTrue', httpOptions);
        }



        save(musicrelease: any): Observable<any> {

                     let result: Observable<Object>;
                       //   alert("ins sup");
                   //     alert(supplier);
                         // if (car['href']) {
                         //   result = this.http.put(car.href, car);
                         // } else {
                            result = this.http.post(this.TENDOITEM_API, musicrelease);
                         // }
                  return result;
             }
  }
