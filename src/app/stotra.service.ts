import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stotra } from './stotra';
import { Observable } from 'rxjs';

@Injectable()
export class StotraService {

  private stotrasUrl: string;

  constructor(private http: HttpClient) {
    this.stotrasUrl = 'http://localhost:8080/api/stotrakosh/all';
  }

  public findAll(): Observable<Stotra[]> {
    return this.http.get<Stotra[]>(this.stotrasUrl);
  }
}
