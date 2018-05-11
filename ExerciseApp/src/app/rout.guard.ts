import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class RoutGuard implements CanActivate {
	
  constructor(private user: UserService, private router: Router) {}
    
  canActivate() {
      console.log(this.user.isAuthorized()+" This ran");
    if(!this.user.getIsLoggedIn().value) {
        this.router.navigate(['login']);
        alert("You must log in to see your profile!");
        return false;
    }
    return true;
   }
}