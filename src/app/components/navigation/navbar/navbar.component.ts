import { User } from '../../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidePainel = true;
  user!: User;
  
  ngOnInit(): void {
    this.user = new User('kleber@gmail.com', '123456', true);
  }

}
