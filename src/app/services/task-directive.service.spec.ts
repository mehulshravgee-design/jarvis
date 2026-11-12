import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TaskDirectiveService } from './task-directive.service';

describe('TaskDirectiveService', () => {
  let service: TaskDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TaskDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
