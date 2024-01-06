import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accident } from '../models/accident';
import { SearchForm } from '../models/search-form';

@Injectable({
  providedIn: 'root',
})
export class AccidentService {
  private readonly API_URL = 'http://localhost:8080/api/accidents';

  constructor(private http: HttpClient) {}

  getAllAccidents(): Observable<Accident[]> {
    return this.http.get<Accident[]>(this.API_URL);
  }

  searchAccidents(form: SearchForm): Observable<Accident[]> {
    return this.http.post<Accident[]>(`${this.API_URL}/search`, form);
  }

  getOperators(): Observable<string[]> {
    return this.http.get<string[]>(this.API_URL + '/operators');
  }

  getAircraftTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.API_URL + '/aircraft-types');
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.API_URL + '/categories');
  }
}