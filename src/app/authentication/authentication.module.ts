import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { routing } from './authentication.route';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AuthenticationComponent, LoginComponent]
})
export class AuthenticationModule { }
