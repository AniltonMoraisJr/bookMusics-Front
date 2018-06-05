import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from './user-list/user-list.component';
import { UserShowComponent } from "./user-show/user-show.component";

const routes: Routes = [
    {path: 'list', component: UserListComponent},
    {path: ':id', component: UserShowComponent}
];

export const routing = RouterModule.forChild(routes);