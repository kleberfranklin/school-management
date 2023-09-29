import { EvaluationService } from './evaluation.service';
import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/model/evaluation';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
  providers: [EvaluationService]
})
export class EvaluationComponent implements OnInit {
  
  isUpdate: number = 0;  
  lsEvaluations?: Evaluation[];
  evaluation?: Evaluation;
  evaluations$! : Observable<Evaluation[]>;

  constructor(private evaluationService: EvaluationService ) {}
  
  ngOnInit(): void {
    this.getListEvaluations();   
  }

  onDelete(evaluation: Evaluation){
    let isDelete = window.confirm('Confirmar a excluisão o registro ?')
    if(!isDelete){      
      return;
    }

    this.evaluationService.delete(evaluation.id)
      .then((data)=>{
        M.toast({ html: `Registro excluído com sucesso!`, displayLength:1500, classes: 'red lighten-3' });
    })     
    
    this.getListEvaluations(); 
  }


 getListEvaluations(){
    this.evaluations$ = this.evaluationService.getAll();
    this.evaluations$.subscribe({
      next:(data) =>{
        this.lsEvaluations = data;
      },
      error(err) {
          console.log(err)
      }
    });
 }


  onUpdateDate(){
    return this.isUpdate = 1;
  }
  onReturnUpdate(event: number){
    this.isUpdate = event;
  }

}
