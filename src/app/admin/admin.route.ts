import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes : Routes = [
    {path: '', component: AdminComponent, children:[
        {path:'home', component: AdminhomeComponent},
        {path:'user', loadChildren: './user/user.module#UserModule'}
    ]},    
];

export const routing = RouterModule.forChild(routes);
