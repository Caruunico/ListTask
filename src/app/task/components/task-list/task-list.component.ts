import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Itask';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableFilter } from 'mat-table-filter';
import { MatSort } from '@angular/material/sort';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnChanges, OnInit, AfterViewInit{
  @Input() listTask: Task[]; 
  @Output() taskDelete: EventEmitter<Task> = new EventEmitter

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns: string[] = ['status', 'title', 'priority', 'date', 'actions'];
  public dataSource: MatTableDataSource<Task>;

  filterEntity: Task;
  filterType: MatTableFilter;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    changes['listTask']['currentValue'] ? this.dataSource = new MatTableDataSource(changes['listTask']['currentValue']) : null;
  }

  constructor(private _taskService: TaskService, private _dialog: MatDialog) {}

  ngOnInit(){
    this.filterEntity = new Task();
    this.filterType = MatTableFilter.STARTS_WITH;
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  public openDetailsTask(task: Task){
    const dialogRef = this._dialog.open(TaskDetailsComponent, {
      width: '500px',
      data: task
    });

  }

  public deleteTask(task: Task){
    this.taskDelete.emit(task)
  }

  public deleteAllTask(){
    this._taskService.deleteAllTasks()
  }

  public allCompleted(){
    this._taskService.markAllTasksAsCompleted()
  }

}
