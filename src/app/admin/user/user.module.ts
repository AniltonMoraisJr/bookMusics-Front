import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { routing } from './user.route';
import { UserShowComponent } from './user-show/user-show.component';
import { LoaderComponent } from '../../helpers/loader/loader.component';
import { AdminModule } from '../admin.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserNewComponent } from './user-new/user-new.component';


@NgModule({
  imports: [
    CommonModule,
    routing,
    AdminModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserShowComponent,
    UserEditComponent,
    UserNewComponent,
  ]
})
export class UserModule { }
