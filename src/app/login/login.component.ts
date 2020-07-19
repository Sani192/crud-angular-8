import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/login-view-model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginViewModel : LoginViewModel = new LoginViewModel();
  loginError : string = "";

  constructor(private loginService : LoginService, private router : Router) {

  }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.loginService.doLogin(this.loginViewModel).subscribe(
      (resp) => {
        this.router.navigateByUrl("/dashboard");
      },
      (err) => {
        console.error(err);
        this.loginError = "Invalid Username or Password";
      }
    )
  }
}
