//Richard Coll
//23-8-2018

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'

  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API = '//indiansummerrecordsserver.herokuapp.com';


  constructor(private http: HttpClient) { }

 validate(username: string, password: string) {

    return this.http.post(this.API + '/validatelogin?username=' + username + '&' + 'passw=' + password  , username);
     //return this.http.get(this.API + '/tendo-items');

}
  xxvalidate(username: string, password: string) {

    httpOptions.headers.append('Access-Control-Allow-Origin', 'https://indiansummeradmin.herokuapp.com');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');


    return this.http.get(this.API + '/validatelogin/?username=' + username + '&' + 'passw=' + password, httpOptions );
       //return this.http.get(this.API + '/tendo-items');

       //below works for username alone
       //return this.http.post(this.API + '/login?xxxxxusername=' + username , username);
         // return this.http.post<any>(this.API + '/login', { username: username, password: password })
           //   .map(user => {
                  // login successful if there's a jwt token in the response
           //       if (user && user.token) {
                      // store user details and jwt token in local storage to keep user logged in between page refreshes
           //           localStorage.setItem('currentUser', JSON.stringify(user));
           //       }

           //       return user;
           //   });
      }
}
