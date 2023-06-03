import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../models/Itask';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent { 
  
  constructor( @Inject(MAT_DIALOG_DATA) public task: Task,
  private _dialogRef: MatDialogRef<ConfirmationDialogComponent>, private _taskService: TaskService){}
  
  public closeDialog(){
    this._dialogRef.close(false)
  }

  public deleteTask(task: Task){
    this._taskService.deleteTask(task)
    this._dialogRef.close(true)
  }
}
