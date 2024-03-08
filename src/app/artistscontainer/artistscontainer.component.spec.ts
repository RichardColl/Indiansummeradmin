import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistscontainerComponent } from './artistscontainer.component';

describe('ArtistscontainerComponent', () => {
  let component: ArtistscontainerComponent;
  let fixture: ComponentFixture<ArtistscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
