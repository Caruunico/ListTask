import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../models/Itask';
import { TaskService } from '../../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  public edit: boolean = true;
  public description: string;

  constructor(@Inject(MAT_DIALOG_DATA) public task: Task,
    private dialogRef: MatDialogRef<TaskDetailsComponent>, private _taskService: TaskService, private _snackBar: MatSnackBar, private _dialog: MatDialog) {
    this.description = task.description;
  }

  public closeDialog() {
    this.dialogRef.close()
  }

  public updateDescription(task: Task) {
    this.description !== task.description ? this._taskService.updateTaskDescription(task.title, task.description) : null
  }

  public deleteTask(task: Task) {
    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: task
    });
    dialogRef.afterClosed().subscribe((data: boolean) => {
      if(data){
        this._taskService.deleteTask(task)
        this.closeDialog()
        this.openSnackBar()
      }
    });
  }

  public openSnackBar() {
    this._snackBar.open('The ' + this.task.title + ' has been deleted.', 'close', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

}
