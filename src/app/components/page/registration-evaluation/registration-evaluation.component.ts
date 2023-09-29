import { Evaluation } from './../../../model/evaluation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!: string;
  title!:string;

  constructor(
    private registrationEvaluationService: RegistrationEvaluationService,
    private route: ActivatedRoute, 
    private router: Router) {}

    
  ngOnInit(): void {
    this.route.queryParams.subscribe( (params) => {
      this.id = params['id'];     
    });
    
    if(this.id){
      this.registrationEvaluationService.getId(this.id)
        .then((data) =>{
          if(data != null){
            this.evaluation = data;
            this.title = 'Atualizar'
          }
      });
    }
    
    this.evaluation =  new Evaluation();
    this.title = 'Cadastro'
  }
    
  onSubmit(){
    if(!this.evaluation.id){
      
      this.registrationEvaluationService.save(this.evaluation)
        .then( (data) =>{
          M.toast({ html: `Cadastrador realizado com sucesso!`, displayLength:1500, classes: 'green' });
        })
        .catch((e) =>{
          M.toast({ html: `Erro: ` + e, displayLength:1500, classes: 'red lighten-3' });
          console.log('Erro: ' + e);
        });  
    
      }else{
    
        this.registrationEvaluationService.update(this.evaluation)
      .then((data)=>{
          M.toast({ html: `Atualização realizada om sucesso!`, displayLength:1500, classes: 'green' });
          console.log(data);
       })
      .catch((e) =>{
          M.toast({ html: `Erro: ` + e, displayLength:1500, classes: 'red lighten-3' });
          console.log('Erro: ' + e);
      });
    }   

    this.form.reset();
    this.evaluation = new Evaluation();
  }

  
  
}
