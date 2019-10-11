import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private baseUrl = 'http://localhost:8080/api/applications';

  constructor(private http: HttpClient) { }

  getApplication(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createApplication(application: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, application);
  }

  updateApplication(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteApplication(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getApplicationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getApplicationsByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
