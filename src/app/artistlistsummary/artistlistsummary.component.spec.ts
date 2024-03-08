import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistlistsummaryComponent } from './artistlistsummary.component';

describe('ArtistlistsummaryComponent', () => {
  let component: ArtistlistsummaryComponent;
  let fixture: ComponentFixture<ArtistlistsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistlistsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistlistsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
