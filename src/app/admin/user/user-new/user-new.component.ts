import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  bIsLoading: boolean;
  userForm: FormGroup;
  user: User;
  constructor(private userService: UserService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.bIsLoading = true;
    this.createForm();
    setTimeout(()=>{
      this.bIsLoading = false;
    }, 1000);
  }
  get f() {return this.userForm.controls;}
  createForm(){   
    this.userForm = new FormGroup(
      {
        'name': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3)])),
        'email': new FormControl(null, Validators.compose([Validators.required, Validators.email])),
        'password': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)])),        
      }
    );
  }



  onSubmit(){
    this.bIsLoading = true;

    const oEditUser: User = {
      id: 0,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      avatar_url: ''
    };


    this.userService.store(oEditUser).subscribe(
      (data: User) => {
          this.bIsLoading = false;
          swal({
            type: 'success',
            title: 'Success',
            text: 'The user was updated!',          
          });
          this.router.navigate(['/admin/user/'+ data.id]);
      },
      (error: any) => {
        alert('Whe have some error !! Please contact the administrator');
        console.log(error);
      }
    )
  }

}
