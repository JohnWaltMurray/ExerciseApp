import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { Profile } from '../models/appmodel';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  Name: String;
  profile: Profile;
  tempProf: Profile;

  FullName: string;
  DateofBirth: Date;
  Email: string;
  FavWorkout: string;
  Gender: string;
  Address:string;

  constructor(private user: UserService, private router: Router) {
    this.Name = this.user.CurrentUser.Username;
   }

  ngOnInit() {
    console.log(this.user.isAuthorized());
    console.log(this.user.CurrentUser.Username);
    var temp = localStorage.getItem(this.user.CurrentUser.Username+this.user.CurrentUser.Password+"prof");
    this.profile = JSON.parse(temp);
  }

  saveProfile() {
    var e = (document.getElementById("Gender")) as HTMLSelectElement;
    var select = e.selectedIndex;
    var gend = e.options[select].text;
    this.tempProf = new Profile(this.FullName+"", this.DateofBirth, this.Email, this.FavWorkout, gend, this.Address);
    var temp = JSON.stringify(this.tempProf);
    localStorage.setItem(this.user.CurrentUser.Username+this.user.CurrentUser.Password+"prof", temp);
    this.router.navigate(["/profile"]);
  }

}