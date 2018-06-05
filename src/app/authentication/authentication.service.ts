import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router, 
              private http: HttpClient) { }

  authenticate(email: string, password: string){
    if(email != '' && password != ''){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      const url: string = config[0]['deploy'][0]['url'] + '/login';
      return this.http.post(url, JSON.stringify({email: email, password: password}), httpOptions)
      
    } 
  }

  saveToken(access_token: string){
    localStorage.setItem('access_token', access_token);
  }

  checkCredentials(){
    if(!localStorage.getItem('access_token'))
      return false;
    else
      return true;
  }

  logout(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    const url: string = config[0]['deploy'][0]['url'] + '/logout';
    this.http.get(url, httpOptions)
    .subscribe(
      (data: any) => {
        localStorage.removeItem('access_token');
      },
      (error : any) => {
        console.error(error);
      }
    );
    
  }
}
