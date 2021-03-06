import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../service/auth/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
  constructor(public authService: AuthService) {
  }
  // @ts-ignore
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.token) {
      // @ts-ignore
      request = request.clone( {
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
      // @ts-ignore
      return next.handle(request);
    }else{
      return next.handle(request);
    }
  }
}
