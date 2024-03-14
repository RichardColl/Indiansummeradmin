import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicreleasecontainerComponent } from './musicreleasecontainer.component';

describe('MusicreleasecontainerComponent', () => {
  let component: MusicreleasecontainerComponent;
  let fixture: ComponentFixture<MusicreleasecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicreleasecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicreleasecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
