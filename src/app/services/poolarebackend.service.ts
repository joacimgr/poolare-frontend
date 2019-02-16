import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
/**
 * Backend @ Erik's place
 * baseIP 192.168.0.11:
 * friend 8180
 * users 8280
 * game 8380
 *
 */
export class PoolarebackendService {
  private BASE_URL = 'http://172.28.0.2:8080/api/';
  constructor(
    private http: HttpClient
  ) { }

  getUser(token: string): Observable<User> {
     return this.http.get<User>(`${this.BASE_URL}users/user/${token}`, httpOptions);
  }
}
