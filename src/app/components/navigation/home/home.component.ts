import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageURL: String = 'assets/resources/imgs/School-Management.jpg';
  constructor() {}
  
  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(225, 245, 254, .7), rgba(225, 245, 254, .9)), url(' +
        this.imageURL +
        ')',
    };
  }

  ngOnInit(): void {}
}
