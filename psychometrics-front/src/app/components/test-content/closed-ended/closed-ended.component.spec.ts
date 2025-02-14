import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedEndedComponent } from './closed-ended.component';

describe('ClosedEndedComponent', () => {
  let component: ClosedEndedComponent;
  let fixture: ComponentFixture<ClosedEndedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosedEndedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedEndedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
