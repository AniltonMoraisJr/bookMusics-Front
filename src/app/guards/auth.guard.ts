import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private router: Router, private authService: AuthenticationService) { }
    canLoad(route: Route): boolean |  Observable<boolean> {
        try {
           return this.verifyAccess();
        } catch (error) {
            throw new Error("Method not implemented.");    
        }        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  {
        try {
            return this.verifyAccess();
        } catch (error) {
            throw new Error("Method not implemented.");    
        }
    }
    verifyAccess(){
        if(this.authService.checkCredentials()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
