import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Workout } from "../models/appmodel";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-workoutlog',
  templateUrl: './workoutlog.component.html',
  styleUrls: ['./workoutlog.component.css']
})
export class WorkoutlogComponent implements OnInit {

  MyLog = [];
  Name: String;
  tempwork: Workout;
  WorkType: string;
  WorkDuration: number;
  WorkDate: Date;
  NumReps: number;
  NumSets: number;

  constructor(private user: UserService, private router: Router) { 
    this.Name = this.user.CurrentUser.Username;
    this.MyLog = JSON.parse(localStorage.getItem(this.user.CurrentUser.Username+this.user.CurrentUser.Password)); 
    console.log(this.MyLog);
  }

  ngOnInit() {
  }

  removeWorkout(index: number) {
    console.log(index);
    this.MyLog.splice(index, 1);
    var temp = JSON.stringify(this.MyLog);
    localStorage.setItem(this.user.CurrentUser.Username+this.user.CurrentUser.Password, temp);
    this.router.navigate(["workoutlog"]);
  }

  addNewWorkout() {
    this.tempwork = new Workout(this.WorkType+"", this.WorkDuration, this.WorkDate, this.NumReps, this.NumSets);
    console.log(""+this.WorkType+this.WorkDuration+this.WorkDate+this.NumReps+this.NumSets+": "+this.MyLog);
    if(this.MyLog) {
      this.MyLog.push(this.tempwork);
    } else {
      this.MyLog = [this.tempwork];
    }
    var temp = JSON.stringify(this.MyLog);
    localStorage.setItem(this.user.CurrentUser.Username+this.user.CurrentUser.Password, temp);
    this.router.navigate(["workoutlog"]);
  }
}
