import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistconnectionsComponent } from './artistconnections.component';

describe('ArtistconnectionsComponent', () => {
  let component: ArtistconnectionsComponent;
  let fixture: ComponentFixture<ArtistconnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistconnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistconnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
