import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MusicreleaseService } from '../shared/musicrelease/musicrelease.service';

@Component({
  selector: 'app-displayededitmusicreleaselist',
  templateUrl: './displayededitmusicreleaselist.component.html',
  styleUrls: ['./displayededitmusicreleaselist.component.scss']
})
export class DisplayededitmusicreleaselistComponent implements OnInit {

  config: any;
  collection = { count: 6, data: [] };

  constructor(private route: ActivatedRoute, private musicreleaseService: MusicreleaseService) { }

   pageChanged(event){
            this.config.currentPage = event;
   }

  ngOnInit() {

     this.musicreleaseService.findByRecentRelease().subscribe(data => {

      if (data) {

              this.collection.data = data._embedded.musicReleases;

       } else {
              console.log(`releases with id not found, returning to list`);

      }
      });


       this.config = {
                    itemsPerPage: 5,
                    currentPage: 1,
                    totalItems: this.collection.count
              };
      }



  }


