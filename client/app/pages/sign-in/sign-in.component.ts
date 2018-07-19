import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username:String;
 password:String;
  constructor() { }

  ngOnInit() {
  }
  Signin(username,password){

    this.username=username;
    this.password=password;
    if(username == "admin" && password == "123"){
      window.location.href = ('generate-report');
    }
    else
    {
      window.location.href = ('home');
    }
    
  
  }


}
