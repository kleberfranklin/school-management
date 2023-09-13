import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../../../model/user';
import { Injectable } from "@angular/core";
import { WebStorageUtil } from '../../util/web-storage-util';
import { Constants } from '../../util/constants';


@Injectable({
    providedIn: 'root',
})

export class userService{
    users!: User[];
    private userSource!: BehaviorSubject<number>;

    constructor() {
      this.users = WebStorageUtil.get(Constants.USERS_KEY);
      this.userSource = new BehaviorSubject<number>(this.users.length);
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

    isExist(value: string): boolean {
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
    
      notifyTotalUsers() {
        this.userSource.next(this.getUsers()?.length);
        // if (this.getUsers()?.length > 1) {
        //   this.userSource.complete();
        // }
      }
    
      asObservable(): Observable<number> {
        return this.userSource;
        //return this.userSource.asObservable()
      }



}