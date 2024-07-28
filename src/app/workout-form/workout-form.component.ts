import { Component } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";;
import {NgIf} from '@angular/common';
import { WorkoutListComponent } from "../workout-list/workout-list.component";
@Component({
  selector: "app-workout-form",
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    NgIf
  ],
  templateUrl: "./workout-form.component.html",
  styleUrl: "./workout-form.component.css"
})
export class WorkoutFormComponent {
  workoutForm = new FormGroup({
    username: new FormControl("",[Validators.required]),
    types: new FormControl("",[Validators.required]),
    minutes: new FormControl("",[Validators.required])
  });
  errorForm = false;
  data = {};
  
  onSubmit() {
    const list = localStorage.getItem("workouts");
    const formValues = this.workoutForm.value;
    if (this.workoutForm.valid===false) {
      this.errorForm = true;
      setTimeout(() => {
        this.errorForm = false;
      }, 5000);
    } 
    else {
      this.data = {
        id: Math.random().toString(5).substring(4),
        username: formValues.username,
        workouts: [
          {
            types: formValues.types,
            minutes: formValues.minutes
          }
        ]
      };
      if (list) {
        const getList = JSON.parse(list);
        getList.push(this.data);
        localStorage.setItem("workouts", JSON.stringify(getList));
        
        
      } else {
        localStorage.setItem("workouts", JSON.stringify([this.data]));
      }
      this.workoutForm.reset();
    }
  }
}
