const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  tokenName: 'token',
  refreshTokenName: 'refresh',
  roles: {
    SuperAdmin: 'SuperAdmin',
    Admin: 'Admin',
    HR: 'HR',
    Employee: 'GeneralAdmin',
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
