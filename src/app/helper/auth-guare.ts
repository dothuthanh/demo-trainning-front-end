import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Route, Router,
  RouterStateSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserToken} from '../model/user-token';
import {AuthService} from '../service/auth/auth.service';
import {state} from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class AuthGuare implements CanActivate, CanActivateChild{
  // @ts-ignore
  currentUser: UserToken;

  constructor(private  router: Router,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  // tslint:disable-next-line:no-shadowed-variable typedef
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser){
      return true;
    }else {
      // @ts-ignore
      this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

  // tslint:disable-next-line:no-shadowed-variable typedef
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      return true;
    } else {
      // @ts-ignore
      this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
