import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // // @ts-ignore
  // currentUser: UserToken;
  // // @ts-ignore
  // formLogin: FormGroup;
  // user: User = {
  //   username: '',
  //   password: ''
  // };
  // // @ts-ignore
  // message: string;
  //
  // constructor(private router: Router,
  //             private fb: FormBuilder,
  //             private activatedRoute: ActivatedRoute,
  //             private authService: AuthService) {
  // }
  //
  // // tslint:disable-next-line:typedef
  // ngOnInit() {
  //   this.authService.currentUser.subscribe(value => this.currentUser = value);
  //   this.formLogin = this.fb.group({
  //     username: [null],
  //     password: [null]
  //   });
  // }
  //
  // // tslint:disable-next-line:typedef
  // login() {
  //   // @ts-ignore
  //   this.authService.login(this.user.username, this.user.password)
  //     .pipe(first())
  //     .subscribe(data => {
  //       localStorage.removeItem('songSelected');
  //       window.location.replace('');
  //     }, error => {return this.message = 'Username or password is incorrect';
  //     });
  // }
  // @ts-ignore
  fieldTextType: boolean;
  // @ts-ignore
  repeatFieldTextType: boolean;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),

    password: new FormControl('')
  });

  error = '';
  loading = false;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('hello');
  }
  // tslint:disable-next-line:typedef
   login() {
    
    this.submitted = true;
    this.loading = true;    
    console.log(this.loginForm.value);
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)      
      .subscribe(
        (data: any) => {
          console.log(data);
          // localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          // localStorage.setItem('ROLE', data.roles[0].authority);
          // if ( data.roles.length > 1 ) {
          //   if ( data.roles[0].authority === 'ROLE_ADMIN' || data.roles[1].authority === 'ROLE_ADMIN' ) {
          //     localStorage.setItem('ROLE', 'ROLE_ADMIN');
          //   }
          // }
          // localStorage.setItem('USERNAME', data.username);
          // if (data.roles[0].authority === 'ROLE_ADMIN') {
          //   this.router.navigate(['/admin']);
          // } else {
          //   this.router.navigate(['/login']);
          // }
        },
        error => {
          console.log(error);
          alert('Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!');
          this.loading = false;
        }
        );
   }
  // tslint:disable-next-line:typedef
  get username(){
    return this.loginForm.get('username');
  }
  // tslint:disable-next-line:typedef
  get password(){
    return this.loginForm.get('password');
  }

  // tslint:disable-next-line:typedef
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  // tslint:disable-next-line:typedef
  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

}
