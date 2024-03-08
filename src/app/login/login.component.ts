import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
    constructor(private fb: FormBuilder,
      private myRoute: Router,
      private loginserv: LoginService ) {
      this.form = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

  ngOnInit() {
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
