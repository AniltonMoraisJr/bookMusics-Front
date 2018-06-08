import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'angular2-cookie/services/cookies.service'
import { AuthenticationService } from  './authentication/authentication.service';

import { routing } from './app.route';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminModule } from './admin/admin.module';
import { LoaderComponent } from './helpers/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AuthenticationModule,
  ],
  providers: [CookieService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
