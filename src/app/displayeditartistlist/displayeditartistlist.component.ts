import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ArtistService } from '../shared/artist/artist.service';

@Component({
  selector: 'app-displayeditartistlist',
  templateUrl: './displayeditartistlist.component.html',
  styleUrls: ['./displayeditartistlist.component.css']
})
export class DisplayeditartistlistComponent implements OnInit {


    releases: Array<any>;
    releaseid: string;

    config: any;
    collection = { count: 6, data: [] };

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  pageChanged(event){
          this.config.currentPage = event;
  }


  ngOnInit() {


              this.artistService.getAll().subscribe(data => {

                     if (data) {

                           this.collection.data = data._embedded.artists;

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
