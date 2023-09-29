import { Constants } from './constants';
import { User } from '../model/user';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.EMAIL_KEY) != null) {
      return;
    }

    //usuário definido na forma literal
    let user = new User(Constants.EMAIL_KEY, '123852', true);

    localStorage.setItem(Constants.EMAIL_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));

  }
}
