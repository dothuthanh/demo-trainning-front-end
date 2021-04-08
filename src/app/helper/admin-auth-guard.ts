import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserToken} from '../model/user-token';
import {UserService} from '../user.service';
import {AuthService} from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  // @ts-ignore
  currentUser: UserToken;
  constructor(private router: Router, private userService: UserService, private authService: AuthService) {
    this.authService.currentUser.subscribe(
      next => {
        this.currentUser = next;
      }
    );
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authService.currentUser.subscribe(
      next => {
        this.currentUser = next;
      }
    );
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let hasRoleAdmin = false;
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          hasRoleAdmin = true;
          break;
        }
      }
      if (hasRoleAdmin) {
        return true;
      } else {
        this.authService.logout();
        this.router.navigate(['/', 'admin', 'admin'], {queryParams: {login: true}, queryParamsHandling: 'merge'});
        return false;
      }
    } else {
      this.router.navigate(['/', 'admin', 'login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      let hasRoleAdmin = false;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          hasRoleAdmin = true;
          break;
        }
      }
      return hasRoleAdmin;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/', 'admin', 'login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

  // tslint:disable-next-line:typedef
  canLoad(route: Route, segments: UrlSegment[]) {
    return true;
  }
}
