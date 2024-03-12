import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarycontainerComponent } from './summarycontainer.component';

describe('SummarycontainerComponent', () => {
  let component: SummarycontainerComponent;
  let fixture: ComponentFixture<SummarycontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarycontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarycontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
