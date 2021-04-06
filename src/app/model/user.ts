import {Role} from './role';

export class User {
  id?: number;
  username?: string;
  password?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  date?: string;
  address?: string;
  img?: string;
  confirmPassword?: string;
  roles?: Role[];


}
