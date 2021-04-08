import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../user.service';
import {UserToken} from '../model/user-token';
import {AuthService} from '../service/auth/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // @ts-ignore
  user: User[];
  // @ts-ignore
  userDeleted: User[];
  // @ts-ignore
  newU: FormGroup;
  // @ts-ignore
  role: string;
  // @ts-ignore
  currentUsername: string;
  p = 1;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllUser();
    this.newU = this.fb.group({
        img: [''],
        username: [''],
        email: [''],
        password: [''],
        fullName: [''],
        address: [''],
        phoneNumber: [''],
        date: ['']
      }
    );
    // @ts-ignore
    this.role = localStorage.getItem('ROLE');
    if (this.role === 'ROLE_USER' || this.role == null) {
      alert('Bạn không có quyền!');
      this.router.navigate(['/home']);
    }
    // @ts-ignore
    this.currentUsername = localStorage.getItem('USERNAME');
  }

  // getAllUserDeleted(): User[] {
  //   this.userService.getAllUserDeleted().subscribe((data: any) => {
  //     this.userDeleted = data;
  //   });
  //   return this.userDeleted;
  // }

  getAllUser(): User[] {
    this.userService.getAllUser().subscribe((data: any) => {
      this.user = data;
    });
    return this.user;
  }
  //
  // delete(id: any) {
  //   if (confirm('Bạn đã chắc chắn?')) {
  //     this.userService.delete(id).subscribe(value => {
  //       console.log('Delete', value);
  //       this.getAllUser();
  //     });
  //   }
  // }
}
