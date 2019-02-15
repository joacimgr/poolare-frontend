import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import IdTokenResult = firebase.auth.IdTokenResult;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PoolarebackendService {
  private BASE_URL = 'localhost:8090';

  constructor(private http: HttpClient) { }

  addUser(idToken: IdTokenResult): Observable<User> {
    const url = `${this.BASE_URL}/users/`;

    return this.http.post<User>(this.BASE_URL, idToken, httpOptions)
  }
}
