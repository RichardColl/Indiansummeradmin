import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayeditartistlistComponent } from './displayeditartistlist.component';

describe('DisplayeditartistlistComponent', () => {
  let component: DisplayeditartistlistComponent;
  let fixture: ComponentFixture<DisplayeditartistlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    expect(component).toBeTruthy();
  });
});
