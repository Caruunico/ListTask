import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MaterialModule } from '../material/material.module';
import { TaskComponent } from './views/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MatTableFilterModule } from 'mat-table-filter';
import { FormsModule } from '@angular/forms';
import { ChipStatusComponent } from './components/chip-status/chip-status.component';


@NgModule({
  declarations: [
    TaskDetailsComponent,
    ConfirmationDialogComponent,
    TaskListComponent,
    TaskComponent,
    ChipStatusComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    MatTableFilterModule,
    FormsModule,
  ]
})
export class TasksModule { }
