import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AnalysisSessionTypeAnalysisSession } from '../models/analysis-session/analysis-session-type-analysis-session';
import { AnalysisSession } from '../static-data/analysis-session';

@Injectable({
  providedIn: 'root'
})
export class AnalysisSessionService {
  public getAnalysisSession(): Observable<AnalysisSessionTypeAnalysisSession[]> {
    return of(AnalysisSession['AnalysisSessionTypeAnalysisSession']);
  }
}
