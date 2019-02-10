import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoolarebackendService {
  private URL = '192.168.1.209:8090';
  constructor(HttpClient) { }
}
