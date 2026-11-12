import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AnalysisSessionType } from '../models/analysis-session-datasource/analysis-session-type';
import { AnalysisSessionDatasource } from '../static-data/analysis-session-datasource';

@Injectable({
  providedIn: 'root'
})
export class AnalysisSessionDatasourceService {
  public getAnalysisSession(): Observable<AnalysisSessionType[]> {
    return of(AnalysisSessionDatasource['AnalysisSessionType']);
  }
}
