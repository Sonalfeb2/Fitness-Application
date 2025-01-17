import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { WorkoutListComponent } from "./workout-list/workout-list.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, WorkoutFormComponent, WorkoutListComponent, FormsModule, ReactiveFormsModule],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Fyle-Fitness";
}
