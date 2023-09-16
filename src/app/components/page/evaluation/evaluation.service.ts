import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Evaluation } from 'src/app/model/evaluation';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()


export class EvaluationService {

  url = 'http://localhost:3000/evaluations';
  header = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  evaluation?: string;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Evaluation[]> {
    return this.httpClient
              .get<Evaluation[]>(`${this.url}`)
              .pipe(
                catchError( err => {
                  throw 'ocorreu o erro: ' + err;
                }));
  }

 
  delete(id: string) {
    return lastValueFrom(this.httpClient.delete(`${this.url}/${id}`));
  }


}  
