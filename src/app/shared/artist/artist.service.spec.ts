import { TestBed } from '@angular/core/testing';

import { ArtistService } from './artist.service';
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture } from '@angular/core/testing';

fdescribe('ArtistService', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [

              HttpClientModule
        ],
        providers: [

             ArtistService,
            HttpClient


         ]

      })

    }));

  it('should be created', () => {
    const service: ArtistService = TestBed.get(ArtistService);
    expect(service).toBeTruthy();
  });
});
