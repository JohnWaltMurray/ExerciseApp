import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserService } from "./services/user.service";
import { RoutGuard } from './rout.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkoutlogComponent } from './workoutlog/workoutlog.component';
import { CoreModule } from './core.module';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [RoutGuard], data: { }},
  { path: 'workoutlog', component: WorkoutlogComponent, canActivate: [RoutGuard], data: { }},
  { path: 'signup',  component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    WorkoutlogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true })
  ],
  providers: [RoutGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
