import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import {NgIf} from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkoutFormComponent } from './workout-form.component';

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutFormComponent],
      imports: [
        ReactiveFormsModule,
        FormGroup,
        FormControl,
        Validators,
        NgIf,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');

    // Simulate form submission
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
