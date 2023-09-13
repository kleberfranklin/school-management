import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-registration',
  templateUrl: './class-registration.component.html',
  styleUrls: ['./class-registration.component.css']
})
export class ClassRegistrationComponent implements OnInit {
  ano: number = 0;
  fundamental?: string;
  
  constructor(private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe( (params) => {
       this.ano = params['id'];
       if(this.ano > 5){
        this.fundamental = 'II'
       }else{
        this.fundamental = 'I'
       }
    
     });

    
  }

}
