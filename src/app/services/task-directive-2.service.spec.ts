import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TaskDirective2Service } from './task-directive-2.service';

describe('TaskDirective2Service', () => {
  let service: TaskDirective2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TaskDirective2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
