import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiansummeradminComponent } from './indiansummeradmin.component';

describe('IndiansummeradminComponent', () => {
  let component: IndiansummeradminComponent;
  let fixture: ComponentFixture<IndiansummeradminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiansummeradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiansummeradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
