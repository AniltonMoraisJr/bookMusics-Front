import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  user?: User;
  isLoading: boolean = true
  constructor(private userService: UserService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.userService.show(id).subscribe(
      (data: User) => {
        this.user = data;
        this.isLoading = false;
      },
      (error: any) => alert('We have un error')
    );
  }

  onDelete(id?: number){
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.userService.delete(id).subscribe(
            (data: any) => {
              swal(
                'Deleted!',
                'Your user has been deleted.',
                'success'
              );
              this.isLoading = true;
              this.router.navigate(['/admin/user/list']);
            },
            (error: any) => {
              console.log('Error: ' + error);
              swal(
                'Ops!',
                'We have some error. Contact the support',
                'error'
              );
            }
          )
          
        }
    });
  }

}
