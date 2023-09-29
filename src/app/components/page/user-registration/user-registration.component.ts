import { UserService } from '../../../services/user.service';
import { Shared } from '../../../util/shared';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../model/user';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit  {
  @ViewChild('form') form!: NgForm;

  user!: User;
  users!: User[];
  isStorage!: boolean;
  email!: string;
  title!: string;
  
  userConfirmPassword: string = '';
  isSubmitted!: boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit(): void {
      Shared.initializeWebStorage();
      this.route.queryParams.subscribe( (params) => {
      this.email = params['email'];      
     });
            
    if(this.email){
      this.user = this.userService.getUserEmail(this.email);
      this.title = 'Atualizar'
     console.log("Usuer Atualizar: " + JSON.stringify(this.user));
    }else{
      this.user = new User('', '');
      this.title = 'Cadastro'
    }    

  }

  onSubmit() {
      this.isStorage = this.userService.isExistStorage(this.user.email);   

      if (this.isStorage) {  
        this.userService.update(this.user);
        M.toast({ html: `Atualização realizada om sucesso!`, displayLength:1500, classes: 'green' }); 
      }else{
        this.userService.save(this.user);
        M.toast({ html: `Cadastrador realizado com sucesso!`, displayLength:1500, classes: 'green' });
      }   
    
    this.form.reset();
    this.user = new User('', '');
  }


 
}
