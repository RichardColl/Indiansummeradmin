import { Component, OnInit, Type } from '@angular/core';
import { CreatemusicreleaseComponent } from '../createmusicrelease/createmusicrelease.component';
import { ISModalComponent, ModalService, AbstractModalService, ISModalModel } from '../shared/modals/modal.service';
import { MusicReleaseInputData } from '../models/musicrelease.model';

@Component({
  selector: 'musicreleasescontainer',
  templateUrl: './musicreleasescontainer.component.html',
  styleUrls: ['./musicreleasescontainer.component.css']
})
export class MusicreleasescontainerComponent implements OnInit {

  constructor(private modalOutletService: AbstractModalService) { }

  ngOnInit() {
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
