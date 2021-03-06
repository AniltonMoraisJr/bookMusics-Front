import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { routing } from './admin.route';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserService } from './user/user.service';
import { LoaderComponent } from '../helpers/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,  
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminComponent,
    AdminhomeComponent,
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
