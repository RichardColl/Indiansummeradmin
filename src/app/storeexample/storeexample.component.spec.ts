import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreexampleComponent } from './storeexample.component';

describe('StoreexampleComponent', () => {
  let component: StoreexampleComponent;
  let fixture: ComponentFixture<StoreexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
