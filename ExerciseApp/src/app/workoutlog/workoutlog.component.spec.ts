import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutlogComponent } from './workoutlog.component';

describe('WorkoutlogComponent', () => {
  let component: WorkoutlogComponent;
  let fixture: ComponentFixture<WorkoutlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
