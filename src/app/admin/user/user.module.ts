import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { routing } from './user.route';
import { UserShowComponent } from './user-show/user-show.component';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserShowComponent
  ]
})
export class UserModule { }
