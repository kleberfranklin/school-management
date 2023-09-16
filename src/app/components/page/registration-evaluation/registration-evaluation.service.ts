import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Evaluation } from 'src/app/model/evaluation';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom } from 'rxjs';

@Injectable()
export class RegistrationEvaluationService {

  url = 'http://localhost:3000/evaluations';
  header = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  evaluation?: string;

  constructor(private httpClient: HttpClient) {}

  save(evaluation: Evaluation) : Promise<Evaluation>{
      return lastValueFrom(
        this.httpClient.post<Evaluation>(
          this.url, JSON.stringify(evaluation), 
          this.header));
  }

  getId(id: string): Promise<Evaluation> {
    return lastValueFrom(
      this.httpClient.get<Evaluation>(`${this.url}/${id}`));
  }
 
  update(evaluation: Evaluation): Promise<Evaluation> {
    return lastValueFrom(
      this.httpClient.put<Evaluation>(
        `${this.url}/${evaluation.id}`, JSON.stringify(evaluation), 
        this.header));
  }

  patch(evaluation: Evaluation): Promise<Evaluation> {
    return lastValueFrom(
      this.httpClient.patch<Evaluation>(
        `${this.url}/${evaluation.id}`,JSON.stringify(evaluation),
        this.header));
  }

  

}
