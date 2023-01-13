const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  tokenName: 'token',
  refreshTokenName: 'refresh',
  currentUser: 'currentUser',
  roles: {
    Admin: 'Admin',
    HR: 'HR',
    Employee: 'Employee',
    Manager: 'Manager',
  },
  paging: {
    perPage: 25,
  },
  gender: {
    male: 'MALE',
    female: 'FEMALE',
    other: 'OTHER',
  },
};

export default config;
