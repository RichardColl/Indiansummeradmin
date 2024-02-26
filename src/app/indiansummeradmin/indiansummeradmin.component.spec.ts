import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';

import { IndiansummeradminComponent } from './indiansummeradmin.component';
import { getDebugElementText } from '../shared/testutils';
import { By } from '@angular/platform-browser';
import { Artist } from '../models/artist.model';


describe('IndiansummeradminComponent', () => {
  let component: IndiansummeradminComponent;
  let fixture: ComponentFixture<IndiansummeradminComponent>;
  let getElementText;
  let debugElement: DebugElement;

  function createTestHarness() {

      fixture = TestBed.createComponent(IndiansummeradminComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      getElementText = getDebugElementText(debugElement);

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
              MatCardModule,
              MatToolbarModule
      ],
      declarations: [ IndiansummeradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiansummeradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component', () => {
     describe('Header', () => {
        it('should display header', () => {
            createTestHarness();
            expect(getElementText('#header')).toEqual('Indian Summer Admin');
          });

     });

     describe('Toolbar', () => {
        describe('Menu', () => {
             it('should display menu buttons', () => {
                 createTestHarness();

                 expect(getElementText('#home')).toEqual('<');
                 expect(getElementText('#artlist')).toEqual('Artist list');
                 expect(getElementText('#createart')).toEqual('Create Artist');
                 expect(getElementText('#musiclist')).toEqual('Musicrelease list');

               });

               it('should display home link', () => {

                   createTestHarness();
                   const homelink = debugElement.query(By.css('#home')).nativeElement;

                   expect(homelink).toBeTruthy();
                   expect(homelink.innerText).toBe('<');



               });


         });

      });

  });

});
