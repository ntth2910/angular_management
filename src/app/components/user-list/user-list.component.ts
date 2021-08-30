import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from "../../common/User";
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  term: any;



  users: any = [];



  constructor(private userService: UserService,
    private router: Router) { }

  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.retrieveUsers();
    this.totalLength = this.users.length;
  }

  retrieveUsers(): void {


    this.userService.getAll()
      .subscribe(
        (data: any) => {
          this.users = data;
          console.log(this);
        },
        (error: any) => {
          console.log(error);
        });
  }
  deleteUserById(id: any): void {
    if (confirm('Do you want to delete this user?')) {
      this.userService.deleteUserById(id).subscribe((data) => {
        alert('Successful delete.');
        this.retrieveUsers();
      });
    }

    // this.userService.deleteUserById(id)
    //   .subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       this.retrieveUsers();
    //     },
    //     (error: any) => {
    //       console.log(error);

    //     }
    //   );
    //  this.retrieveUsers();
  }
}
