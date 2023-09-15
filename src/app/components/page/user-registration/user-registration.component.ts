import { userService } from '../../../services/user.service';
import { Shared } from '../../../util/shared';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit  {
  @ViewChild('form') form!: NgForm;

  user!: User;
  users!: User[];
  
  userConfirmPassword: string = '';
  isSubmitted!: boolean;

  constructor(private userService: userService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    this.isSubmitted = true;

    if (!this.userService.isExist(this.user.email)) {
      this.userService.save(this.user);
    } else {
      this.userService.update(this.user);
    }
 
    this.form.reset();
    this.user = new User('', '');

    this.users = this.userService.getUsers();

    
  }

 
}
