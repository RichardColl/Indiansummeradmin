import { Injectable, EventEmitter } from '@angular/core';


export interface ISModalComponent<T = any> {

      inputData: T;
      closeEvent: EventEmitter<any>;
      preventModalClose?: boolean;
      result?: any;
      headingOverride?: string;


}

export abstract class AbstractModalService{
      abstract openModalComponent():void;
}

@Injectable()
export class ModalService {

      public openModalComponent() {

          alert('openokkk');
      }
}
