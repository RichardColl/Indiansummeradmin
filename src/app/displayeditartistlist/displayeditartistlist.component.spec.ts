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

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayeditartistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

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



});
