import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarPropogateService {

  constructor() { }

  private subject = new Subject<any>();

  sendLanguageChangeEvent(selectedLanguage: string) {
    this.subject.next(selectedLanguage);
  }

  getLanguageChangeEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
