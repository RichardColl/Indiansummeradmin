import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenaiapiService {

  private apiUrl = environment.apiUrl; // Update with your Node.js server URL

  constructor(private http: HttpClient) { }

    public sendMessage(message: string) {

      const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${environment.apiKey}`
          });

      return this.http.post<any>(`${this.apiUrl}`, { message }, { headers } );
      //return this.http.post<any>(`${this.apiUrl}`, { model: 'gpt-4', messages: message }, { this.headers });
    }
}
