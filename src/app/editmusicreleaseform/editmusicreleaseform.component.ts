import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { MusicreleaseService } from '../shared/musicrelease/musicrelease.service';
import { MusicRelease } from '../models/musicrelease.model';

import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-editmusicreleaseform',
  templateUrl: './editmusicreleaseform.component.html',
  styleUrls: ['./editmusicreleaseform.component.scss']
})
export class EditmusicreleaseformComponent implements OnInit {

      musictypes = new FormControl();
      musictypesList: string[] = ['VINYL', 'CD', 'CASSETTE'];



      sub: Subscription;
      releases: Array<any>;

      musicrelease: any = {};
      imgurl: string;
      history: string;
      theid: string;

      href: string;

      returnUrl: string;


  constructor(private route: ActivatedRoute, private router: Router, private musicreleaseService: MusicreleaseService) { }

  update(form: NgForm): void{

               this.musicreleaseService.update(form)
                     .subscribe(
                            data => {
                                 this.router.navigate([this.returnUrl]);
                                          },
                                          error => {
                                             // this.alertService.error(error);
                                             // this.loading = false;
                                          });

     }


    ngOnInit() {

               this.sub = this.route.params.subscribe(params => {
                     const id = params['id'];

               //      alert(id);
                     if (id) {
                       this.musicreleaseService.get(id).subscribe((musicrelease: any) => {
                         if (musicrelease) {
                           this.musicrelease = musicrelease;
                           this.musicrelease.href = musicrelease._links.self.href;
                 //          alert(this.car.frontcoverimage);
                          //this.imgurl = "https://indiansummerserver.herokuapp.com/images/" + this.artist.menuimage;
                         // this.history = this.artist.history;

                         } else {
                           console.log(`Car with id '${id}' not found, returning to list`);

                         }
                       });
                     }
                   });




    }
    }
