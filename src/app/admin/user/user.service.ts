import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { CrudInterface } from '../../helpers/crudInterface';
import { config } from '../../config/config';
import { User } from '../../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService implements CrudInterface{
  
  
  
  constructor(private cookieService: CookieService,
    private http: HttpClient) { }
    
  getUserAttenticatedInfo<User>(): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    const url: string = config[0]['deploy'][0]['url'] + '/user';
    return this.http.get<User>(url, httpOptions);
  }
  getAll<T>(page?: string): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    let url: string;
    if(page != null){
      url = page;
    }else {
      url = config[0]['deploy'][0]['url'] + '/users';
    }     
    return this.http.get<any>(url, httpOptions);
  }
  save<User>(object: any): Observable<User> {
    throw new Error("Method not implemented.");
  }
  update<User>(object: any): Observable<User> {
    throw new Error("Method not implemented.");
  }
  delete<User>(object: any): Observable<User> {
    throw new Error("Method not implemented.");
  }
  show<User>(id?: number): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    const url: string = config[0]['deploy'][0]['url'] + '/users/' + id;
    return this.http.get<User>(url, httpOptions);
  }

}
  