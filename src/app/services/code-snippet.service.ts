import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CodeSnippetType } from '../models/code-snippet/code-snippet-type';
import { CodeSnippet } from '../static-data/code-snippet';

@Injectable({
  providedIn: 'root'
})
export class CodeSnippetService {
  public getCodeSnippet(): Observable<CodeSnippetType[]> {
    return of(CodeSnippet['CodeSnippetType']);
  }
}
