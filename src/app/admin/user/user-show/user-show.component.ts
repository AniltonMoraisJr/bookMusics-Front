import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  user?: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.userService.show(id).subscribe(
      (data: User) => {
        this.user = data;
        console.log(this.user);
      },
      (error: any) => alert('We have un error')
    );
  }

}
