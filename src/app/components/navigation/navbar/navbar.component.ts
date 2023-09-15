import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { Shared } from '../../../util/shared';
import { WebStorageUtil } from '../../../util/web-storage-util';
import { Constants } from '../../../util/constants';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isLogin = false;
  user!: User;
  subscription!: Subscription;

  constructor(private router: Router, private loginService: LoginService) {
    this.subscription = this.loginService.asObservable().subscribe((value) => {
      this.isLogin = value;
      console.log('returno isLogin: ' + this.isLogin);
      
      this.user = this.loginService.getUser()
      console.log('email: ' + this.user.email);
      console.log('isAdmin: ' + this.user.isAdmin);

    });
     
  }
  
  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.isLogin = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
    console.log('inicial isLogin:'  + this.isLogin);
     
    if(this.isLogin){
      this.user = this.loginService.getUser()
      console.log('email: ' + this.user.email);
      console.log('isAdmin: ' + this.user.isAdmin);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.user;
    console.log('destroy - land-page');
  }

}
