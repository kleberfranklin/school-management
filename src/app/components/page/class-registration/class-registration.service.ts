import { ClasseSchedules } from './../../../model/classes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class ClassRegistrationService {

  url = 'http://localhost:3000/classeSchedules';
  header = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private httpClient: HttpClient) {}

  save(classeSchedules: ClasseSchedules): Observable<ClasseSchedules>{
      return this.httpClient
          .post<ClasseSchedules>(this.url, JSON.stringify(classeSchedules), this.header)
          .pipe(catchError( err => {
              throw ' ocorreu o erro: ' + err;
          }));
  }

  getId(id: string): Observable<ClasseSchedules> {
    return this.httpClient
        .get<ClasseSchedules>(`${this.url}/${id}`)
        .pipe(catchError( err => {
            throw ' ocorreu o erro: ' + err;
        }));
  }
 
  update(classeSchedules: ClasseSchedules): Observable<ClasseSchedules> {
    return this.httpClient
      .put<ClasseSchedules>(`${this.url}/${classeSchedules.id}`, JSON.stringify(classeSchedules), this.header)
      .pipe(catchError( err => {
        throw ' ocorreu o erro: ' + err;
      }));
  }

  patch(classeSchedules: ClasseSchedules): Observable<ClasseSchedules> {
    return this.httpClient
        .patch<ClasseSchedules>(`${this.url}/${classeSchedules.id}`,JSON.stringify(classeSchedules),this.header)
        .pipe(catchError( err => {
          throw ' ocorreu o erro: ' + err;
        }));
  }



}
