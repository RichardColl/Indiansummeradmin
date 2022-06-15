import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmusicreleaseformComponent } from './editmusicreleaseform.component';

describe('EditmusicreleaseformComponent', () => {
  let component: EditmusicreleaseformComponent;
  let fixture: ComponentFixture<EditmusicreleaseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmusicreleaseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmusicreleaseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
