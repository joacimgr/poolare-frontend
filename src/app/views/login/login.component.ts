import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
    signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log(err));
  }
  signUpWithEmail() {
    this.authService.signUpRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['login']);
      });
  }
}
