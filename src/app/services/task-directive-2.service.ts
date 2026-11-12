import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskDirectiveType } from '../models/task-directive-2/task-directive-type';
import { TaskDirective2 } from '../static-data/task-directive-2';

@Injectable({
  providedIn: 'root'
})
export class TaskDirective2Service {
  public getTaskDirective(): Observable<TaskDirectiveType[]> {
    return of(TaskDirective2['TaskDirectiveType']);
  }
}
