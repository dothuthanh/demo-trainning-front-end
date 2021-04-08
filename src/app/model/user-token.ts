import {Role} from './role';

export interface UserToken {
  id: number;
  username: string;
  password: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  date?: string;
  address?: string;
  img?: string;
  token?: string;
  roles: Role[];
}
