import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponenetComponent} from './hello-componenet/hello-componenet.component';
import {AuthGuare} from './helper/auth-guare';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponenetComponent,
    // Author doc su dung khi dang nhap thi moi vao duoc duong dan nay
    canActivate: [AuthGuare]
  },
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
