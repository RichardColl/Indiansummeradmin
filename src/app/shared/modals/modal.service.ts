import { Injectable, EventEmitter, Type } from '@angular/core';
import { Observable , Subject} from 'rxjs';


export interface ISModalComponent<T = any> {

      inputData: T;
      closeEvent: EventEmitter<any>;
      preventModalClose?: boolean;
      result?: any;
      headingOverride?: string;


}

export interface ISModalModel<T= any> {

    componentType: Type<ISModalComponent<T>>;
    inputData: T;

}

export abstract class AbstractModalService{
      abstract listen$: Observable<ISModalModel>;
      abstract openModalComponent(data: ISModalModel):void;
}

@Injectable()
export class ModalService implements AbstractModalService {

      private modalServiceSubject: Subject<ISModalModel> = new Subject();

      public listen$ = this.modalServiceSubject.asObservable();

      public openModalComponent(data: ISModalModel) {
//alert('openokkk');
          this.modalServiceSubject.next(data);

          alert('openokkkzzzzzzzzzz');
      }
}
