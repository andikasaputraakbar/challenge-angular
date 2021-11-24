import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc2bComponent } from './cc2b.component';

describe('Cc2bComponent', () => {
  let component: Cc2bComponent;
  let fixture: ComponentFixture<Cc2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cc2bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cc2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
