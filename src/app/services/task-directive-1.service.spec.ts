import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TaskDirective1Service } from './task-directive-1.service';

describe('TaskDirective1Service', () => {
  let service: TaskDirective1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TaskDirective1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
