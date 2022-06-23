import { TaskResolver } from './service/task-resolveService';
import { CanDeactivateGuard } from './service/can-deactivate-guardService';
import { AuthGuard } from './service/auth-guardService';
import { AuthService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { TaskComponent } from './task/task.component';
import { ChildTaskComponent } from './child-task/child-task.component';
import { ErrorComponent } from './error/error.component';
import { ChildComponent } from './child/child.component';
import { DataService } from './service/dataservice';


const appRoutes: Routes = [
  {
    path: 'task', component: TaskComponent,canDeactivate:[CanDeactivateGuard],children:[{
      path:':id',component:ChildComponent,resolve:{task:TaskResolver}
    }]
  },
  {
    path: 'new', component: NewComponent,canActivateChild: [AuthGuard], children: [{
      path: ':id', component: ChildTaskComponent
    }]
  },

  {
    path:'**',component:ErrorComponent,data:{message:"NotFound"}
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    TaskComponent,
    ChildTaskComponent,
    ErrorComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers: [DataService,AuthService,AuthGuard,CanDeactivateGuard,TaskResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
