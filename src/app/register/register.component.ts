import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../service/auth/auth.service';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  formRegister: FormGroup;
  // @ts-ignore
  user: User;
  // submitted = false;

  constructor(private serviceAuth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      username: [null],
      phoneNumber: [null],
      password: [null],
      confirmPassword: [null],
      check: [null],
    date: [null],
    email: [null],
      fullName: [null],
      address: [null]
    });
    // tslint:disable-next-line:ban-types typedef
  }comparePassword(password: String, confirmPassword: String){
    return password !== confirmPassword;
  }
  // tslint:disable-next-line:typedef
  register() {
      // @ts-ignore
    const user1: User = this.formRegister.value;
    this.serviceAuth.register(user1).subscribe(value => {
      alert('Register Account Successful !!!');
      this.router.navigate(['/login']);
    });
  }

//   successMessage = '';
//   // @ts-ignore
//   fieldTextType: boolean;
//   // @ts-ignore
//   repeatFieldTextType: boolean;
//   failMessage = '';
//
//   registerForm: FormGroup = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl(''),
//     fullName: new FormControl(''),
//     confirmPassword: new FormControl(''),
//     img: new FormControl(''),
//     date: new FormControl('' ),
//     email: new FormControl('' ),
//     phoneNumber: new FormControl(''),
//     address: new FormControl(''),
//   });
//
//   constructor(private authService: AuthService,
//               private router: Router) { }
//
//   ngOnInit(): void {
//   }
//   // tslint:disable-next-line:typedef
//   register() {
//     const user: User = this.setNewUser();
//     this.authService.register(user).subscribe(() => {
//       console.log('Đăng ký thành công');
//       this.registerForm.reset();
//       this.router.navigate(['/login']);
//     }, err => {
//       console.log(err);
//     });
//     console.log(user);
//   }
//
//   // tslint:disable-next-line:typedef
//   private setNewUser() {
//     const user: User = {
//       username: this.registerForm.value.username,
//       password: this.registerForm.value.password,
//       confirmPassword: this.registerForm.value.confirmPassword,
//       img: this.registerForm.value.img,
//       fullName: this.registerForm.value.fullName,
//       email: this.registerForm.value.email,
//       phoneNumber: this.registerForm.value.phoneNumber,
//       date: this.registerForm.value.date,
//       address: this.registerForm.value.address
//     };
//     return user;
//   }
//
//   // tslint:disable-next-line:typedef
//   toggleFieldTextType() {
//     this.fieldTextType = !this.fieldTextType;
//   }
//
//   // tslint:disable-next-line:typedef
//   toggleRepeatFieldTextType() {
//     this.repeatFieldTextType = !this.repeatFieldTextType;
//   }
//
//
}
