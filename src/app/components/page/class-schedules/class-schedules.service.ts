import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ClasseSchedules } from 'src/app/model/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassSchedulesService {

  
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/classeSchedules';
  header = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};


  getAll(): Observable<ClasseSchedules[]> {
    return this.httpClient
              .get<ClasseSchedules[]>(`${this.url}`)
              .pipe(
                catchError( err => {
                  throw 'ocorreu o erro: ' + err;
                }));
  }

  delete(id:string): Observable<ClasseSchedules>{
    return this.httpClient
          .delete<ClasseSchedules>(`${this.url}/${id}`, this.header)
          .pipe(catchError( err => {
            throw ' ocorreu o erro: ' + err;
            }
          ));
  }






}
