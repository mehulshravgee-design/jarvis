import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskDirectiveTypeTaskDirective } from '../models/task-directive/task-directive-type-task-directive';
import { TaskDirective } from '../static-data/task-directive';

@Injectable({
  providedIn: 'root'
})
export class TaskDirectiveService {
  public getTaskDirective(): Observable<TaskDirectiveTypeTaskDirective[]> {
    return of(TaskDirective['TaskDirectiveTypeTaskDirective']);
  }
}
