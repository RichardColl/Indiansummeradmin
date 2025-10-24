import { Component, OnInit, Type } from '@angular/core';
import { CreatemusicreleaseComponent } from '../createmusicrelease/createmusicrelease.component';
import { ISModalComponent, ModalService, AbstractModalService, ISModalModel } from '../shared/modals/modal.service';
import { MusicReleaseInputData } from '../models/musicrelease.model';

import { ActivatedRoute, Router } from '@angular/router';

import { ArtistService } from '../shared/artist/artist.service';
import { AdminDispatcher, AdminType } from '../shared/utils/listener.service';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { ServiceState } from '../shared/main-api.service';
import { ArtistData } from '../shared/artist.abstract.service';
import { ArtistComboData } from '../shared/artist.abstract.service';



import { ArtistServiceData } from '../shared/artist.abstract.service';


@Component({
  selector: 'musicreleasescontainer',
  templateUrl: './musicreleasescontainer.component.html',
  styleUrls: ['./musicreleasescontainer.component.css']
})
export class MusicreleasescontainerComponent implements OnInit {

        collection = { count: 6, data: [] };
        thedata:any;
        theCombodata:any;
        result = [];

        ServiceStateEnum = ServiceState;

  constructor(private modalOutletService: AbstractModalService,
                private artistService: ArtistService,  private readonly adminDispatcher: AdminDispatcher) { }



  displayArtistsOptionsState$:Observable<ServiceState>
            = this.artistService.artistserviceData$.pipe(
              map(({ artistServiceState, artistDetails }) => {

              if(artistServiceState === this.ServiceStateEnum.SUCCESS) {
                this.thedata = artistDetails;
         //       this.collection.data = this.thedata._embedded.artists;
         //       this.result.push(this.collection.data[0]);

              }

              return artistServiceState;
              })
            );

          artistDetails: ArtistData;



   displayComboArtistsOptionsState$:Observable<ServiceState>
               = this.artistService.artistserviceDataCombo$.pipe(
                 map(({ artistServiceState, artistComboDetails }) => {

                 if(artistServiceState === this.ServiceStateEnum.SUCCESS) {
                   this.theCombodata = artistComboDetails;
            //       this.collection.data = this.thedata._embedded.artists;
            //       this.result.push(this.collection.data[0]);

                 }

                 return artistServiceState;
                 })
               );

     artistComboDetails: ArtistComboData;

    readonly viewData$ = this.artistService.serviceData$.pipe(

              map(response => {


              } ),
               tap(model => {

                             this.adminDispatcher.dispatch(
                                 AdminType.ARTIST_LIST,
                                 model as ArtistServiceData
                             );
                })
             ) as Observable<ArtistServiceData>;

  ngOnInit() {

    this.artistService.getMonoArtistByID();

    this.artistService.getComboMonoArtistByID();

  }



   randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }






  handleCreateMusicRelease() {
      alert('createe');
      // this code needs to work with extra modal component code containing a template
      //which will be positioned ina  fixed area on page and will be plugged with the CreatemusicreleaseComponent
      //when dialog loaded , uses the listen$ observable
      //too much code involved to finish
      let componentType : Type<ISModalComponent> = CreatemusicreleaseComponent;

      const inputData: MusicReleaseInputData = {

            supportMessage: 'Music Release Area',
            hostID: 'Indiansummer'

      };

      this.modalOutletService.openModalComponent( {
            componentType,
            inputData } as ISModalModel);



  }
}
