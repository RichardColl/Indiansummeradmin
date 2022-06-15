import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartistformComponent } from './editartistform.component';

describe('EditartistformComponent', () => {
  let component: EditartistformComponent;
  let fixture: ComponentFixture<EditartistformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditartistformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditartistformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
