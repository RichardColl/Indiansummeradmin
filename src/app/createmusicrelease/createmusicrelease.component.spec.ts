import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemusicreleaseComponent } from './createmusicrelease.component';

describe('CreatemusicreleaseComponent', () => {
  let component: CreatemusicreleaseComponent;
  let fixture: ComponentFixture<CreatemusicreleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemusicreleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemusicreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
