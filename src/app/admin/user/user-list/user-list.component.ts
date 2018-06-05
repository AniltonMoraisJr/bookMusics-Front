import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
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
/* 
            for (let index: number = 1; index <= +data.last_page; index++) {
              this.ar.push(index);
              
            }

            console.log(this.ar);
            this.pagination.pages = this.ar; */

            //console.log(data);            
            //console.log(this.pagination); 
        },
        (error: any) => console.error(error)        
      );
    } else {
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
            
           /*  for (let index: number = 1; index <= +data.last_page; index++) {
              this.ar.push(index);
              
            }

            console.log(this.ar);
            this.pagination.pages = this.ar; */

            //console.log(this.pagination); 
        },
        (error: any) => console.error(error)        
      );
    }
  
  }

}
