import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { WorkoutListComponent } from "./workout-list/workout-list.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, WorkoutFormComponent, WorkoutListComponent],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Fyle-Fitness";
}
