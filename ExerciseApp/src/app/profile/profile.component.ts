import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Name: String;
  constructor(private user: UserService, private router: Router) {
    this.Name = this.user.CurrentUser.Username;
   }

  ngOnInit() {
    console.log(this.user.isAuthorized());
    console.log(this.user.CurrentUser.Username);
  }

  editProfile() {
    this.router.navigate(["/editprofile"]);
  }

}
