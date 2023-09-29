import { ClasseSchedules } from './../../../model/classes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClassRegistrationService } from './class-registration.service';
import { Observable } from 'rxjs';
import { data } from 'jquery';

@Component({
  selector: 'app-class-registration',
  templateUrl: './class-registration.component.html',
  styleUrls: ['./class-registration.component.css'],
  providers: [ClassRegistrationService]
})
export class ClassRegistrationComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  
  id!: string;
  ano!: string;
  fundamental!: string;
  classeSchedules!: ClasseSchedules;
  classeSchedules$!: Observable<ClasseSchedules>;
  
  constructor(
        private route: ActivatedRoute, 
        private router: Router,
        private classRegistrationService: ClassRegistrationService) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe( (params) => {
      this.id = params['id'];      
      this.fundamental = params['ano'];
     });

     if(this.id){
        this.classeSchedules = this.findClasseSchedules(this.id);
     }else{
       this.classeSchedules = new ClasseSchedules(this.fundamental);
     }
     
    }

    findClasseSchedules(id: string){
      this.classeSchedules$ = this.classRegistrationService.getId(this.id)
      this.classeSchedules$.subscribe({
        next:(data) =>{
          this.classeSchedules = data;
        },
        error(err) {
          console.log(err)
        }
      });
     return this.classeSchedules
    }

    onSubmit(){
      if(!this.classeSchedules.id){
        this.classeSchedules$ = this.classRegistrationService.save(this.classeSchedules);
        this.classeSchedules$.subscribe({
          next:(data) =>{
            M.toast({ html: `Cadastrador realizado com sucesso!`, displayLength:1500, classes: 'green' });
            console.log('dados cadastrados' + JSON.stringify(data))
          },
          error(e) {
            M.toast({ html: `Erro: ` + JSON.stringify(e), displayLength:1500, classes: 'red lighten-3' });
            console.log(JSON.stringify(e))
          }
        })
        
        this.form.reset();
      
      }else{
        this.classeSchedules$ = this.classRegistrationService.update(this.classeSchedules);
          this.classeSchedules$.subscribe({
            next:(data) =>{
              this.classeSchedules = data;
              M.toast({ html: `Atualização realizada om sucesso`, displayLength:1500, classes: 'green' });
              console.log('dados cadastrados' + JSON.stringify(data))
            },
            error(e) {
              M.toast({ html: `Erro: ` + JSON.stringify(e), displayLength:1500, classes: 'red lighten-3' });
              console.log(JSON.stringify(e))
            }

          })
          this.classeSchedules;
      }
      this.classeSchedules = new ClasseSchedules(this.fundamental);
    }

}
