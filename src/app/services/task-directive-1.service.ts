import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskDirectiveTypeTaskDirective1 } from '../models/task-directive-1/task-directive-type-task-directive-1';
import { TaskDirective1 } from '../static-data/task-directive-1';

@Injectable({
  providedIn: 'root'
})
export class TaskDirective1Service {
  public getTaskDirective(): Observable<TaskDirectiveTypeTaskDirective1[]> {
    return of(TaskDirective1['TaskDirectiveTypeTaskDirective1']);
  }
}
