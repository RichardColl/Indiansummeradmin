import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateartistformComponent } from './createartistform.component';

describe('CreateartistformComponent', () => {
  let component: CreateartistformComponent;
  let fixture: ComponentFixture<CreateartistformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateartistformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateartistformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
