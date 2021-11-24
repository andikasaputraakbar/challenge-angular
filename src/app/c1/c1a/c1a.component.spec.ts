import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1aComponent } from './c1a.component';

describe('C1aComponent', () => {
  let component: C1aComponent;
  let fixture: ComponentFixture<C1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
