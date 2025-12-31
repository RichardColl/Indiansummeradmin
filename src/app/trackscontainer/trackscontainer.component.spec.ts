import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackscontainerComponent } from './trackscontainer.component';

describe('TrackscontainerComponent', () => {
  let component: TrackscontainerComponent;
  let fixture: ComponentFixture<TrackscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
