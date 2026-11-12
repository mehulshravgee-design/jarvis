import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnalysisSessionService } from './analysis-session.service';

describe('AnalysisSessionService', () => {
  let service: AnalysisSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AnalysisSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
