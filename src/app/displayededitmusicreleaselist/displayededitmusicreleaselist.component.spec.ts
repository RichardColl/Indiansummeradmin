import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayededitmusicreleaselistComponent } from './displayededitmusicreleaselist.component';

describe('DisplayededitmusicreleaselistComponent', () => {
  let component: DisplayededitmusicreleaselistComponent;
  let fixture: ComponentFixture<DisplayededitmusicreleaselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayededitmusicreleaselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayededitmusicreleaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
