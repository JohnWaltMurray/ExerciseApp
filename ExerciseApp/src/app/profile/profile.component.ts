import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { Profile } from '../models/appmodel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Name: String;
  profile: Profile;

  constructor(private user: UserService, private router: Router) {
    this.Name = this.user.CurrentUser.Username;
   }

  ngOnInit() {
    console.log(this.user.isAuthorized());
    console.log(this.user.CurrentUser.Username);
    var temp = localStorage.getItem(this.user.CurrentUser.Username+this.user.CurrentUser.Password+"prof");
    this.profile = JSON.parse(temp);
    console.log(this.profile);
  }

  editProfile() {
    this.router.navigate(["/editprofile"]);
  }

}
