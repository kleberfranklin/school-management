import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  valor: String = "";
  constructor(){}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }
  
  // onSelectChange(event: Event){
  //   // this.loginValue = (event.target as HTMLInputElement).value;
  //   alert("Selecionou a rede de ensino: "+ (event.target as HTMLInputElement).value)
  // }
}

