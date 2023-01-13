import Http from 'lib/Http';

const http = new Http();

export default class AuthService {
  static login(args) {
    return http.post({
      endpoint: '/login',
      payload: args,
    });
  }

  static getCurrentUser() {
    return http.get({
      endpoint: '/me',
    });
  }

  static logout() {
    return http.post({
      endpoint: '/auth/logout',
    });
  }

  static changePassword(args) {
    return http.put({
      endpoint: '/users/change-password',
      payload: args,
    });
  }
}
