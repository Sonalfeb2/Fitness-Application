import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, WorkoutFormComponent],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Fyle-Fitness";
}
