import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './service/auth/auth.service';
import {Observable} from 'rxjs';
import {User} from './model/user';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  resetPassword(username: string, password: string): Observable<any> {
    return this.http.put(API_URL + `/users/resetpassword/${username}`, password);
  }
  getAllUser(): Observable<any> {
    return this.http.get(API_URL + `/users`);
  }

  getUserByUsername(username: any): Observable<any> {
    return this.http.get<User>(API_URL + `/users/${username}`);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(API_URL + `/users/update`, user);
  }

  checkPassword(user: User): Observable<any> {
    return this.http.post(API_URL + `/users/resetpassword`, user);
  }
}
