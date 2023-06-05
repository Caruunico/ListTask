import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/Itask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      title: 'TASK 1',
      description: 'Lorem ipsum dolor sit am',
      status: 'COMPLETED',
      priority: 'HIGH',
      date: '2023-06-01'
    },
    {
      title: 'TASK 2',
      description: 'Lorem ipsum dolor sit am',
      status: 'IN PROGRESS',
      priority: 'LOW',
      date: '2023-06-02'
    },
    {
      title: 'TASK 3',
      description: 'Lorem ipsum dolor sit am',
      status: 'NEW',
      priority: 'LOW',
      date: '2023-06-03'
    },
    {
      title: 'TASK 4',
      description: 'Lorem ipsum dolor sit am',
      status: 'NEW',
      priority: 'LOW',
      date: '2023-06-04'
    },
    {
      title: 'TASK 5',
      description: 'Lorem ipsum dolor sit am',
      status: 'COMPLETED',
      priority: 'LOW',
      date: '2023-06-05'
    },
    {
      title: 'TASK 6',
      description: 'Lorem ipsum dolor sit am',
      status: 'IN PROGRESS',
      priority: 'LOW',
      date: '2023-06-06'
    },
    {
      title: 'TASK 7',
      description: 'Lorem ipsum dolor sit am',
      status: 'COMPLETED',
      priority: 'LOW',
      date: '2023-06-07'
    },
    {
      title: 'TASK 7',
      description: 'Lorem ipsum dolor sit am',
      status: 'NEW',
      priority: 'LOW',
      date: '2023-06-08'
    },
    {
      title: 'TASK 9',
      description: 'Lorem ipsum dolor sit am',
      status: 'IN PROGRESS',
      priority: 'LOW',
      date: '2023-06-09'
    },
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  constructor() {}

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.tasksSubject.next(this.tasks);
    }    
  }

  markAllTasksAsCompleted() {
    this.tasks.forEach(task => (task.status = 'COMPLETED'));
    this.tasksSubject.next(this.tasks);
  }

  updateTaskDescription(taskTitle: string, newDescription: string): void {
    const tasks = this.tasksSubject.getValue();
    const taskToUpdate = tasks.find(task => task.title === taskTitle);
    if (taskToUpdate) {
      taskToUpdate.description = newDescription;
      this.tasksSubject.next([...tasks]);
    }
  }

  deleteAllTasks() {
    this.tasks = [];
    this.tasksSubject.next(this.tasks);
  }
}
