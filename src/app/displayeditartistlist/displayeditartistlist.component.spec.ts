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

describe('DisplayeditartistlistComponent', () => {
  let component: DisplayeditartistlistComponent;
  let fixture: ComponentFixture<DisplayeditartistlistComponent>;
  let tmpArtistSrv;
  let debugElement: DebugElement;

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
           useClass: ArtistService
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

describe('verify we create component', () => {
  it('should create DisplayeditartistlistComponent', () => {

        fixture = TestBed.createComponent(DisplayeditartistlistComponent);
                          component = fixture.componentInstance;
                          debugElement = fixture.debugElement;
                          fixture.detectChanges();
      const theartist = {
          id: 123,
          name: 'abc',
          menuimage: 'def',
          history: 'ghi'
      }

      //fix this later
      //this would probably need to be an array of artist objects rather that one artist const
      //the _embedded structure probably complicates things ???
      overrideArtistlistprovider(theartist);

   expect(component).toBeTruthy();


  });

  it('verify init service call', () => {

        fixture = TestBed.createComponent(DisplayeditartistlistComponent);
                          component = fixture.componentInstance;
                          debugElement = fixture.debugElement;
                          fixture.detectChanges();
         tmpArtistSrv = debugElement.injector.get(ArtistService);

         spyOn(tmpArtistSrv, 'getArtistsByDisplay').and.returnValue({});
         component.ngOnInit();

         expect(tmpArtistSrv.getArtistsByDisplay).toHaveBeenCalledTimes(1);



    });

     afterEach(() => {
            fixture.destroy();
          });

  });


  describe('calculate the state from data', () => {

        it('verify init service call', () => {
            //we mock up the artistservice observable
            //and give it an in progress state

            fixture = TestBed.createComponent(DisplayeditartistlistComponent);
                    component = fixture.componentInstance;
                    debugElement = fixture.debugElement;
                    fixture.detectChanges();
            TestBed.overrideProvider(ArtistService, {
                    useValue: {
                        serviceData$: of({
                            artistServiceState: ServiceState.IN_PROGRESS,
                            artistDetails: {}

                        })
                    }
             });

            //access the components observable in progress state
            component.displayArtistsOptionsState$.subscribe(viewState => {
                expect(viewState).toBe(ServiceState.IN_PROGRESS);
            });




     });

  });

//this last test won't work error thrown in afterAll
//need to fix later
//problem is when and where to create the fixture and component
//and make them withing async or sync calls ????
describe('calculate the state from data', () => {
   it('verify init service call', () => {
          //we mock up the artistservice observable
          //and give it an in progress state

          fixture = TestBed.createComponent(DisplayeditartistlistComponent);
                  component = fixture.componentInstance;
                  debugElement = fixture.debugElement;
                  fixture.detectChanges();

          const theartist = {
                    id: 123,
                    name: 'abc',
                    menuimage: 'def',
                    history: 'ghi'
           }

           //fix this later
           //this would probably need to be an array of artist objects rather that one artist const
           //the _embedded structure probably complicates things ???
           overrideArtistlistprovider(theartist);

          //access the components observable in progress state
          component.displayArtistsOptionsState$.subscribe(viewState => {
              expect(viewState).toBe(ServiceState.SUCCESS);
          });



   });
});


});
