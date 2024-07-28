
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NgFor } from '@angular/common';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,NgFor],
})
export class WorkoutListComponent implements AfterViewInit {
  displayedColumns: string[] = [ 'name', 'workouts','minutes','workoutnumber'];
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

const initialData = [
  {
    id: 1,
    username: 'John Doe',
    workouts: [
      { types: 'Running', minutes: 30 },
      { types: 'Cycling', minutes: 45 }
    ]
  },
  {
    id: 2,
    username: 'Jane Smith',
    workouts: [
      { types: 'Swimming', minutes: 60 },
      { types: 'Running', minutes: 20 }
    ]
  },
  {
    id: 3,
    username: 'Mike Johnson',
    workouts: [
      { types: 'Yoga', minutes: 50 },
      { types: 'Cycling', minutes: 40 }
    ]
  }
]
const localData = localStorage.getItem("workouts")
console.log(localData)

const ELEMENT_DATA: PeriodicElement[] = (localData!==null ?[...initialData, ...JSON.parse(localData)]:initialData)
