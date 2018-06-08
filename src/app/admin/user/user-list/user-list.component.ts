import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  isLoading: boolean = true;
  pagination: any = {
    current_page: '',
    first_page_url: '',
    from: '',
    last_page: '',
    last_page_url: '',
    next_page_url: '',
    prev_page_url: '',
    pages: []
  };
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(page?: string){
    if (page != null) {
      this.isLoading = true;
      this.userService.getAll(page)
      .subscribe(
        (data: any) => {
            this.users = data.data; 
            //load pagination
            this.pagination.current_page = data.current_page;
            this.pagination.first_page_url = data.first_page_url;
            this.pagination.from = data.from;
            this.pagination.last_page = data.last_page;
            this.pagination.last_page_url = data.last_page_url;
            this.pagination.next_page_url = data.next_page_url;
            this.pagination.prev_page_url = data.prev_page_url;

            this.isLoading = false;
        },
        (error: any) => console.error(error)        
      );
    } else {
      this.isLoading = true;
      this.userService.getAll()
      .subscribe(
        (data: any) => {
            this.users = data.data; 
            //load pagination
            this.pagination.current_page = data.current_page;
            this.pagination.first_page_url = data.first_page_url;
            this.pagination.from = data.from;
            this.pagination.last_page = data.last_page;
            this.pagination.last_page_url = data.last_page_url;
            this.pagination.next_page_url = data.next_page_url;
            this.pagination.prev_page_url = data.prev_page_url;
            
            this.isLoading = false;
        },
        (error: any) => console.error(error)        
      );
    }
  
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
              this.getUsers();
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
