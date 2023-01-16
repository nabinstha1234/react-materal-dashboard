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
      endpoint: '/logout',
    });
  }

  static changePassword(args) {
    return http.post({
      endpoint: '/change-password',
      payload: args,
    });
  }

  static getEmployeeInfo(args) {
    return http.post({
      endpoint: '/admin/employee-info',
      payload: args,
    });
  }
}
