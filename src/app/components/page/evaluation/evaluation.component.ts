import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  isUpdate: number = 0;  
  ngOnInit(): void {}

  onUpdateDate(){
    return this.isUpdate = 1;
  }

  onReturnUpdate(event: number){
    this.isUpdate = event;
  }

}
