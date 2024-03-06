import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { LoginService } from '../shared/login/login.service';
import { UtilsService } from '../shared/utils/utils.service';

import { ServiceState } from '../shared/main-api.service';
import { TrackData } from '../shared/utils.abstract.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  config: any;
  collection = { count: 6, data: [] };
  thedata: TrackData;


  form;
    constructor(private fb: FormBuilder,
      private myRoute: Router,
      private loginserv: LoginService,
      private utilsService: UtilsService) {
      this.form = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

    ServiceStateEnum = ServiceState;

    displayUtilsOptionsState$:Observable<ServiceState>
          = this.utilsService.trackData$.pipe(
            map(({ trackServiceState, trackDetails }) => {

            if(trackServiceState === this.ServiceStateEnum.SUCCESS) {
              //thedata is now defined as the TrackData interface
              //but i probably still can't directly assign as data is probably under _embedded
              //
              this.thedata = trackDetails;

            }

            return trackServiceState;
            })
          );



  ngOnInit() {

           this.utilsService.getMusicReleaseId('62ded9a846e6d74f4d560805');


  }

  login() {

            if (this.form.valid) {
                 // this.loading = true;

                  this.loginserv.validate(this.form.value.email, this.form.value.password)
                      .subscribe(
                            (response: any) => {
                             // callback(response.status);
                              //localStorage.setItem('token', response.token);
                              if(response.validlogin == 1) {


                                this.myRoute.navigate(["indiansummeradmin"]);
                              }
                              else{
                                alert("not valid login");
                              }
                            });

                 }
              }


  }
