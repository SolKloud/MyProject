import { CanComponentDeactivate } from './../service/can-deactivate-guardService';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements CanComponentDeactivate {

  isTaskAdded:boolean=false;
  constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router) { }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.isTaskAdded){
      return confirm("Do you want to discard the changes");
    }
    else{
        return true;
    }
  };

  loggedIn(){
   this.authService.logIn();
  }

  loggedOut(){
    this.authService.logOut();
  }

  Ondeactivate(){
    this.router.navigate(['/new']);
    this.isTaskAdded=true;
  }


}
