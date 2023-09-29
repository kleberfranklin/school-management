import { Observable, Observer, Subject } from 'rxjs';

import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from './../util/constants';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private loginSource = new Subject<boolean>();
  user!: User;

  constructor(private router: Router) {}

  login() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
    this.loginSource.next(true);
    this.router.navigate(['']);
  }

  logout() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
    this.loginSource.next(false);
    this.router.navigate(['']);
  }

  asObservable(): Observable<boolean> {
    return this.loginSource;
    //return this.loginSource.asObservable()
  }

  getUser(): User {
    this.user = WebStorageUtil.get(Constants.EMAIL_KEY);
    return this.user;
  }

}
