import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Pictures: string[] = []

  constructor(private user:UserService) {  }

  ngOnInit() {
  }

  loginUser(username: string, password: string) {
    console.log("working?");
    this.user.login(username, password);
  }
}
