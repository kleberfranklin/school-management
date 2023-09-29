import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { WebStorageUtil } from '../../../util/web-storage-util';
import { Shared } from '../../../util/shared';
import { LoginService } from '../../../services/login.service';
import { Constants } from '../../../util/constants';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageURL: String = 'assets/resources/imgs/School-Management.jpg';
  isLogin = false;
  subscription!: Subscription;
  
  constructor(private router: Router, private loginService: LoginService) {
    this.subscription = this.loginService.asObservable().subscribe((value) => {
      this.isLogin = value;
    });
  }
  
  getBackgroundImage() {
    return {
      'background-image':
      'linear-gradient(rgba(225, 245, 254, .7), rgba(225, 245, 254, .9)), url(' + this.imageURL + ')',
    };
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.isLogin = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
    console.log('home isLogin:' + !this.isLogin);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
