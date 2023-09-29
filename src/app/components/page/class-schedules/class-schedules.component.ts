import { ClasseSchedules } from './../../../model/classes';
import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassSchedulesService } from './class-schedules.service';

@Component({
  selector: 'app-class-schedules',
  templateUrl: './class-schedules.component.html',
  styleUrls: ['./class-schedules.component.css'],
  providers: [ClassSchedulesService]
})

export class ClassSchedulesComponent implements OnInit {

  listClasseSchedules!: ClasseSchedules[];
  listClasseSchedules$!: Observable<ClasseSchedules[]>;
  classeSchedules$!:Observable<ClasseSchedules>;
  monday = true;
  dayWeek = 'Segunda-feira'

  constructor(
      private classSchedulesService: ClassSchedulesService,
      private router: Router,){}


  ngOnInit(): void {
    this.getListClasseSchedules(this.dayWeek);    
  }

  onSelectWeek(event: any, value: string) {
    this.dayWeek = value;
    this.getListClasseSchedules(this.dayWeek);
  }

  onClickItem(c:ClasseSchedules){
    this.router.navigate(
          ['/class-registration/'],
            { queryParams: { 'id': c.id, 'ano': c.ensino } }
        );    
  }

  onDelete(c:ClasseSchedules){
    let isDelete = window.confirm('Confirmar a excluisão o registro ?')
    if(!isDelete){      
      return;
    }

    this.classeSchedules$ = this.classSchedulesService.delete(c.id);
    this.classeSchedules$.subscribe({
      next:(data) =>{
        M.toast({ html: `Registro excluído com sucesso!`, displayLength:1500, classes: 'red lighten-3' });
      },
      error(err) {
          console.log(err)
      }
    })
    

    this.getListClasseSchedules(this.dayWeek);

  }


  getListClasseSchedules(weed: string){
    this.listClasseSchedules$ = this.classSchedulesService.getAll();
    this.listClasseSchedules$.subscribe({
      next:(data) =>{
        this.listClasseSchedules = data?.filter(
          (c)=> c.diaSemana?.includes(weed));
      },
      error(err) {
        console.log(err)
      }
    });
  }









}
