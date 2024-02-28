import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceState } from '../shared/main-api.service';



import { getDebugElementText } from '../shared/testutils';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ArtistService } from '../shared/artist/artist.service';
import { HttpClient } from '@angular/common/http';


import { DisplayeditartistlistComponent } from './displayeditartistlist.component';


const overrideArtistlistprovider = artlistrespData => {

    TestBed.overrideProvider(ArtistService, {
        useValue: {
            serviceData$: of({
                artistServiceState: ServiceState.SUCCESS,
                artistDetails: artlistrespData

            })
        }
    })
}

const theartist = {
                    id: 123,
                    name: 'abc',
                    menuimage: 'def',
                    history: 'ghi'
           };

fdescribe('DisplayeditartistlistComponent', () => {
  let component: DisplayeditartistlistComponent;
  let fixture: ComponentFixture<DisplayeditartistlistComponent>;
  let tmpArtistSrv;
  let debugElement: DebugElement;
  let mockArtistService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
            MatCardModule,
            MatToolbarModule,
            MatProgressSpinnerModule,
            RouterTestingModule,
            HttpClientModule
      ],
      providers: [
          {
           provide:ArtistService,
           useClass: mockArtistService
           },
           {
              provide:HttpClient,
              useClass: HttpClient
           }
       ],
      declarations: [ DisplayeditartistlistComponent ]
    })
    .compileComponents();

  }));



describe('calculate the state from data', () => {

        it('verify init service call', () => {
            //we mock up the artistservice observable
            //and give it an in progress state

            fixture = TestBed.createComponent(DisplayeditartistlistComponent);
                    component = fixture.componentInstance;
                    debugElement = fixture.debugElement;
                    fixture.detectChanges();

             mockArtistService.serviceData$.next({
                    state:ServiceState.SUCCESS,
                    data:theartist
             });

            //access the components observable in progress state
            //the test isn't working maybe async issues
            //plus thedata won't exactly match theartist model

            component.displayArtistsOptionsState$.subscribe(viewState => {
                fixture.detectChanges();
                expect(viewState).toBe(ServiceState.SUCCESS);
                expect(component.thedata).toEqual(theartist);
            });




     });

  });


});
