import { getToken } from 'utils/token';
import config from 'config';

class Auth {
  authenticated = false;
  constructor() {
    this.authenticated = false;
  }
  isAuthenticated() {
    this.authenticated = !!getToken({ name: config.tokenName });
    return this.authenticated;
  }
}

export default new Auth();
