import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { routing } from './admin.route';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,  
    routing,
  ],
  declarations: [
    AdminComponent,
  ]
})
export class AdminModule { }
