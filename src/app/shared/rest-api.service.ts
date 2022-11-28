import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getEmployees(): Observable<Employee> {
    return this.http
      .get<Employee>(this.apiUrl + '/employees')
      .pipe(retry(1), catchError(this.handleError))
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http
      .get<Employee>(this.apiUrl + '/employees/' + id)
      .pipe(retry(1), catchError(this.handleError))
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(
        this.apiUrl + '/employees',
        employee,
      )
      .pipe(retry(1), catchError(this.handleError))
  }

  updateEmployeeById(id: number, employee: Employee): Observable<Employee> {
    return this.http
      .put<Employee>(
        this.apiUrl + '/employees/' + id,
       employee,
      )
      .pipe(retry(1), catchError(this.handleError))
  }

  deleteEmployeeById(id: number) {
    return this.http
      .delete<Employee>(
        this.apiUrl + '/employees/' + id,
        )
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

