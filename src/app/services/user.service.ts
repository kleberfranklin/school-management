import { User } from './../model/user';
import { BehaviorSubject, Observable,catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Injectable } from "@angular/core";
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';
import { UserJon } from '../model/userJson';


@Injectable({
    providedIn: 'root',
})

export class UserService{
    users!: User[];
    user!: User; 
    userJson!: UserJon; 
    url = 'http://localhost:3000/users';
    header = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    
    private userSource!: BehaviorSubject<number>;

    constructor(private httpClient: HttpClient) {
      this.users = WebStorageUtil.get(Constants.USERS_KEY);
      this.userSource = new BehaviorSubject<number>(this.users.length);
      
    }

    getUserEmail(value: string): User {
      this.users = WebStorageUtil.get(Constants.USERS_KEY);
      for (let u of this.users) {
        if (u.email?.valueOf() == value?.valueOf()) {
          return u;
        }
      }
      return new User("","");
    } 

    save(user: User){
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        this.users.push(user);
        WebStorageUtil.set(Constants.USERS_KEY, this.users);
    }

    update(user: User) {
      this.users = WebStorageUtil.get(Constants.USERS_KEY);
      this.delete(user.email);
      this.save(user);
    }


    delete(email: string): boolean {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.users = this.users.filter((u) => {
        return u.email?.valueOf() != email?.valueOf();
    });
   
    WebStorageUtil.set(Constants.USERS_KEY, this.users);
        return true;
    }

    isExistStorage(value: string): boolean {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        for (let u of this.users) {
          if (u.email?.valueOf() == value?.valueOf()) {
            return true;
          }
        }
        return false;
    }
    
    getUsers(): User[] {
      this.users = WebStorageUtil.get(Constants.USERS_KEY);
      return this.users;
    }
    
    
    // asObservable(): Observable<number> {
    //   return this.userSource;
    //   //return this.userSource.asObservable()
    // }



}