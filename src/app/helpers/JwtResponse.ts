import {User} from '../models/user';

export class JwtResponse {
  token: string;
  type: string;
  user: User;

}
