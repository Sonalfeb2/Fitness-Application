import { Component } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
@Component({
  selector: "app-workout-form",
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: "./workout-form.component.html",
  styleUrl: "./workout-form.component.css"
})
export class WorkoutFormComponent {}
