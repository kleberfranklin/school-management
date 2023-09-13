import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSchedulesComponent } from './class-schedules.component';

describe('ClassSchedulesComponent', () => {
  let component: ClassSchedulesComponent;
  let fixture: ComponentFixture<ClassSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassSchedulesComponent]
    });
    fixture = TestBed.createComponent(ClassSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
