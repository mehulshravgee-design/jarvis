import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnalysisSessionDatasourceService } from './analysis-session-datasource.service';

describe('AnalysisSessionDatasourceService', () => {
  let service: AnalysisSessionDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AnalysisSessionDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
