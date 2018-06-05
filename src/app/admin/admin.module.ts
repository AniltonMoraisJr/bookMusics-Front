import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { routing } from './admin.route';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserService } from './user/user.service';


@NgModule({
  imports: [
    CommonModule,  
    routing,
  ],
  declarations: [
    AdminComponent,
    AdminhomeComponent,
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
