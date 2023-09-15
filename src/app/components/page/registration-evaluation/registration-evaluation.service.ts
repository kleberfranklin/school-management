import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Evaluation } from 'src/app/model/evaluation';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RegistrationEvaluationService {

  url = 'http://localhost:3000/evaluations';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private httpClient: HttpClient) {}

  save(evaluation: Evaluation) : Promise<Evaluation>{
      return lastValueFrom(
        this.httpClient.post<Evaluation>(
          this.url, JSON.stringify(evaluation), 
          this.httpOptions
        ));
  }

  getAll(): Promise<Evaluation[]> {
    return lastValueFrom(
      this.httpClient.get<Evaluation[]>(
        `${this.url}`
      ));
  }





}
