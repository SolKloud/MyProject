import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

//now we use auth service inside our auth-guard service
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):| boolean| UrlTree| Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/task']);
        return false;
      }
    });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,state: RouterStateSnapshot):| boolean| UrlTree| Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}

