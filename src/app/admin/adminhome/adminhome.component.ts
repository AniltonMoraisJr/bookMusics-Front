import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  isLoading: boolean = true;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.isLoading = false;
    }, 1000);
  }

}
