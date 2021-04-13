import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, pipe} from 'rxjs';
import {UserToken} from '../../model/user-token';
import {HttpClient} from '@angular/common/http';
import {EventEmitter} from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../../model/user';
// const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // tslint:disable-next-line:new-parens
  update = new EventEmitter<string>();

    // @ts-ignore
  private currentUserSubject: BehaviorSubject<UserToken>;
  // @ts-ignore
  public currentUser: Observable<UserToken>;

  constructor(private  http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse((localStorage.getItem('user'))));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }
  register(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080' + '/register/create', user);
  }
  // tslint:disable-next-line:typedef
  login(username: string, password: string):Observable<any> {
    const body = {username,password};
    console.log(this.http);
    return this.http.post('http://localhost:8080/login', body);
    // .pipe(map( user => {
    //   localStorage.setItem('user', JSON.stringify(user));
    //   // @ts-ignore
    //   this.currentUserSubject.next(user);
    //   this.update.emit('login');
    //   return user;
    // }));
  }
  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('user');
    // @ts-ignore
    this.currentUserSubject.next(null);
  }
}
