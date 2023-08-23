import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarPropogateService {

  constructor() { }

  private subjectLanguage = new Subject<any>();
  private subjectHome = new Subject<void>();

  // Language
  sendLanguageChangeEvent(selectedLanguage: string) {
    this.subjectLanguage.next(selectedLanguage);
  }

  getLanguageChangeEvent(): Observable<any>{
    return this.subjectLanguage.asObservable();
  }

  // Home
  sendHomeClickedEvent() {
      this.subjectHome.next();
    }

    getHomeClickedEvent(): Observable<any>{
      return this.subjectHome.asObservable();
    }
}
