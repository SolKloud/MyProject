import { DataService } from './dataservice';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

interface taskData{
    name:string,
    status:string
}

@Injectable()
export class TaskResolver implements Resolve<taskData>{
    constructor(private dataService:DataService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): taskData | Observable<taskData> | Promise<taskData> {
        return this.dataService.getTask(route.params['id']);
    }
}