import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEvaluationComponent } from './registration-evaluation.component';

describe('RegistrationEvaluationComponent', () => {
  let component: RegistrationEvaluationComponent;
  let fixture: ComponentFixture<RegistrationEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationEvaluationComponent]
    });
    fixture = TestBed.createComponent(RegistrationEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
