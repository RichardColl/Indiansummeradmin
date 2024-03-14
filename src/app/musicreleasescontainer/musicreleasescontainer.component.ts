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
