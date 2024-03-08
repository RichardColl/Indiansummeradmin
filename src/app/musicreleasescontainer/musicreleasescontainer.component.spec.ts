import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicreleasescontainerComponent } from './musicreleasescontainer.component';

describe('MusicreleasescontainerComponent', () => {
  let component: MusicreleasescontainerComponent;
  let fixture: ComponentFixture<MusicreleasescontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicreleasescontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicreleasescontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
