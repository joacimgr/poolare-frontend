import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {LoginComponent} from "../login/login.component";
import {User} from "../../model/user";
import {PoolarebackendService} from "../../services/poolarebackend.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = new User();
  constructor(public authService: AuthService, public poolarebackend: PoolarebackendService) { }
  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.authService.userDetails.getIdToken().then(token => {
      this.poolarebackend.getUser(token).subscribe(user => {
        console.log(user.name);
        this.user = user;
      });
    })
  }
}
