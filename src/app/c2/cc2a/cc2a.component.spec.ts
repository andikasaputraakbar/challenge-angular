import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc2aComponent } from './cc2a.component';

describe('Cc2aComponent', () => {
  let component: Cc2aComponent;
  let fixture: ComponentFixture<Cc2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cc2aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cc2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
