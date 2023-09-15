import { Evaluation } from './../../../model/evaluation';
import { Component, OnInit, ViewChild } from '@angular/core';
import {RegistrationEvaluationService} from './registration-evaluation.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-registration-evaluation',
  templateUrl: './registration-evaluation.component.html',
  styleUrls: ['./registration-evaluation.component.css'],
  providers: [RegistrationEvaluationService],

})

export class RegistrationEvaluationComponent implements OnInit {

  @ViewChild('form') form!: NgForm;
  evaluation!: Evaluation

  constructor(private registrationEvaluationService: RegistrationEvaluationService) {}
  
  ngOnInit(): void {
      this.evaluation =  new Evaluation();
  }

  onClearForm(){
    this.form.reset();
  }
  
  onSubmit(){
    this.registrationEvaluationService
        .save(this.evaluation)
        .then( ()=> {
          console.log("Sucesso arquivo no json"); 
        })
        .catch( (e) =>{
          console.log('Erro: ' + e);
        });

    this.form.reset();
    this.evaluation = new Evaluation();
  }

  
}
