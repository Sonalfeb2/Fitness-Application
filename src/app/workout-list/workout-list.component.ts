// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-workout-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './workout-list.component.html',
//   styleUrl: './workout-list.component.css'
// })
// export class WorkoutListComponent {

// }
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class WorkoutListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'workouts'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  name: string;
  workouts: object;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'John Doe',
    workouts: [
      { type: 'Running', minutes: 30 },
      { type: 'Cycling', minutes: 45 }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    workouts: [
      { type: 'Swimming', minutes: 60 },
      { type: 'Running', minutes: 20 }
    ]
  },
  {
    id: 3,
    name: 'Mike Johnson',
    workouts: [
      { type: 'Yoga', minutes: 50 },
      { type: 'Cycling', minutes: 40 }
    ]
  }
];
