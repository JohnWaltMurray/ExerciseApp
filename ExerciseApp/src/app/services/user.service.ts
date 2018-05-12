import { Injectable } from '@angular/core';
import { User } from '../models/appmodel';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class UserService {

  CurrentUser = new User();
  isLoggedIn = new BehaviorSubject<boolean>(this.loginStatus());

  constructor(private router: Router) { 

  }

  login(uname: string, pword: string) {
    console.log(this.CurrentUser.Username);
    console.log(this.CurrentUser.Username);
    this.CurrentUser = { Username: uname, Password: pword }
    console.log(this.CurrentUser.Username);
    this.setUserLoggedIn();
    console.log(this.isLoggedIn);
    this.router.navigate(['/home']);
  }

  setUserLoggedIn() {
  	localStorage.setItem('loginstatus', 'JWT');
    this.isLoggedIn.next(true);
  }
  getIsLoggedIn() {
    return this.isLoggedIn;
  }
  loginStatus() {
  	return !!localStorage.getItem('loginstatus');
  }

  isAuthorized() : Observable<boolean> {
    return this.isLoggedIn.asObservable().share();
  }

  logout() {
    console.log("logout");
    localStorage.removeItem('loginstatus');
    this.isLoggedIn.next(false);
  }

}