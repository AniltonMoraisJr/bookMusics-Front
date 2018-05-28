import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private router: Router, private cookieServie: CookieService) { }

  authenticate(email: string, password: string){
    if(email != '' && password != ''){
      this.cookieServie.put('access_token', 'token');
      return true;
    }

    return false;
    
  }

  checkCredentials(){
    if(!this.cookieServie.get('access_token'))
      return false;
    else
      return true;
  }

  logout(){
    this.cookieServie.removeAll();
  }
}
