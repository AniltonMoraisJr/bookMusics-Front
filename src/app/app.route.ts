import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);