import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1bComponent } from './c1b.component';

describe('C1bComponent', () => {
  let component: C1bComponent;
  let fixture: ComponentFixture<C1bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
