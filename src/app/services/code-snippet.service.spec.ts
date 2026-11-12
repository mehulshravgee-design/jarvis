import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CodeSnippetService } from './code-snippet.service';

describe('CodeSnippetService', () => {
  let service: CodeSnippetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CodeSnippetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
