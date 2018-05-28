import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthenticationService, 
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }

    if(this.authService.authenticate(this.loginForm.controls.email.value, this.loginForm.controls.password.value)){
      this.router.navigate(['/admin']);
    }
  }

}
