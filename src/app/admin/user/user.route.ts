import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from './user-list/user-list.component';
import { UserShowComponent } from "./user-show/user-show.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserNewComponent } from "./user-new/user-new.component";

const routes: Routes = [
    {path: 'new', component: UserNewComponent},
    {path: 'list', component: UserListComponent},
    {path: ':id',  component: UserShowComponent},
    {path: 'edit/:id', component: UserEditComponent}
];

export const routing = RouterModule.forChild(routes);