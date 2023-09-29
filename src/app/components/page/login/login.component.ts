import { WebStorageUtil } from '../../../util/web-storage-util';
import { Constants } from '../../../util/constants';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  loginUser!: User;
  isAdmin!: boolean;
  
  constructor(private loginService: LoginService) {}

  
  ngOnInit(): void {
    this.loginUser = new User('', ''); 
    this.user = WebStorageUtil.get(Constants.EMAIL_KEY);
  }

  onLogin() {
    if(this.user){
      if (      
          this.loginUser.email === this.user.email &&
          this.loginUser.password === this.user.password
         ) {
          this.loginService.login();
      } else {
        M.toast({ html: `Email ou senha errados, por favor tente novamente!`, displayLength:2000, classes: 'red lighten-3' });
      }
    }
  }
  
}

