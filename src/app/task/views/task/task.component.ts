import { Component } from '@angular/core';
import { Task } from '../../models/Itask';
import { TaskService } from '../../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public taskList: Task[];

  constructor(private _taskService: TaskService, private _dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTasks()
  }

  public getTasks() {
    this._taskService.getTasks().subscribe((data: Task[]) => {
      this.taskList = [...data]
      console.log(this.taskList)
    })
  }

  public deleteTask(task: Task) {
    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: task
    });
    dialogRef.afterClosed().subscribe((data: boolean) => {
      if(data){
        this._taskService.deleteTask(task)
        this.openSnackBar(task)
      }
    });
  }

  public openSnackBar(task: Task) {
    this._snackBar.open('The ' + task.title + ' has been deleted.', 'Close', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }
}
