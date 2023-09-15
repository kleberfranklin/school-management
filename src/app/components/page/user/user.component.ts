import { userService } from '../../../services/user.service';
import { Shared } from '../../../util/shared';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user!: User;
  users!: User[];

  constructor(private userService: userService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
  }
  
   /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de usuários cadastrados sem pressionar o submit.
   * @param user
   */

   onEdit(user: User) {
    //this.user = user;
    let clone = User.copy(user);
    this.user = clone;
  }

  onDelete(username: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + username
    );
    if (!confirmation) {
      return;
    }
    
    let response: boolean = this.userService.delete(username);
    
    // this.isShowMessage = true;
    // this.isSuccess = response;
  
    // if (response) {
    //   this.message = 'O item foi removido com sucesso!';
    // } else {
    //   this.message = 'Opps! O item não pode ser removido!';
    // }

    this.users = this.userService.getUsers();
    // this.userService.notifyTotalUsers();
  }
}
