import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  bIsLoading: boolean;
  oUser? : User;
  userForm: FormGroup;
  constructor(private userService: UserService, 
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.bIsLoading = true;
    this.createForm();
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.getUserData(id);
    }
  }

  getUserData(id: number){    
    this.userService.show(id).subscribe(
      (data: User) => {
        this.oUser = data;
        console.log(this.oUser.email);
        // Load UserForm
        this.userForm.patchValue({
          name: this.oUser.name,
          email: this.oUser.email,
        });

        this.bIsLoading = false;
      },
      (error: any) => alert('We have un error')
    );
  }

  createForm(){   
    this.userForm = new FormGroup(
      {
        name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
        email: new FormControl('', Validators.compose([Validators.required, Validators.email])),        
      }
    );
  }

  onSubmit(){
    const oEditUser: User = {
      id: this.oUser.id,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.oUser.password,
      avatar_url: this.oUser.avatar_url
    };

    const id: number = +this.route.snapshot.paramMap.get('id');

    this.userService.update(oEditUser, id).subscribe(
      (data: User) => {
          swal({
            type: 'success',
            title: 'Success',
            text: 'The user was updated!',          
          });
          this.router.navigate(['/admin/user/' + data.id]);
      },
      (error: any) => {
        alert('Whe have some error !! Please contact the administrator');
        console.log(error);
      }
    )
  }
}
