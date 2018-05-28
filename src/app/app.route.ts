import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes : Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'admin', loadChildren: 'src/app/admin/admin.module#AdminModule', canActivate: [AuthGuard], canLoad: [AuthGuard]}
];

export const routing = RouterModule.forRoot(routes);