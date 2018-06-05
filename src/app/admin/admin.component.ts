import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';
import { UserService } from './user/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User;
  constructor(private authService: AuthenticationService, 
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.getUserLogged();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getUserLogged(){
    this.userService.getUserAttenticatedInfo()
      .subscribe(
        (data: User) => {
          this.user = data;
        },
        (error : any) => {
          alert('Whoops we have somithing wrong !! Contact the administrator !');
        }
      )
  }
}
