import { UserService } from '../../../services/user.service';
import { Shared } from '../../../util/shared';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../model/user';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user!: User;
  lsUsers!: User[];
  user$!: Observable<User[]>;
  isStorage!: boolean;
  title!:string;
  id!:string;

  constructor(
    private userService: UserService) {}

  ngOnInit(): void {  
    this.lsUsers = this.userService.getUsers();

    if(!this.lsUsers){      
      Shared.initializeWebStorage();
      this.lsUsers = this.userService.getUsers();
      this.isStorage = this.userService.isExistStorage(this.user.email);
    }
   
  }
  
 
  onDelete(u: User) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + u.email
    );
    if (!confirmation) {
      return;
    }
        
    let response: boolean = this.userService.delete(u.email);
    if (response) {
        M.toast({ html: `Registro excluído com sucesso!`, displayLength:1500, classes: 'red lighten-3' });  
    } else {
        M.toast({ html: `Erro ao excluído: ` + this.user.email, displayLength:1500, classes: 'red lighten-3' });
    }  
    this.lsUsers = this.userService.getUsers();
  
 
  }



}
