import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username : string = 'in28minutes'
  password : string = 'dummy'
  errorMessage : String = 'Invalid Credentials'
  invalidLogin : Boolean = false
  constructor() { }

  ngOnInit() {
  }

}