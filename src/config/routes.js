import { AddEmployee } from 'features/add-employee/routes';
import { lazyImport } from 'utils/lazyImport';

const { Dashboard } = lazyImport(() => import('features/misc'), 'Dashboard');
const { Page404 } = lazyImport(() => import('components/pages'), 'Page404');
const { MasterPage } = lazyImport(() => import('features/master-page'), 'MasterPage');
const { DailyReport } = lazyImport(() => import('features/daily-report'), 'DailyReport');
const { LeaveManagement } = lazyImport(() => import('features/leave-management'), 'LeaveManagement');
const { EmployeeManagement } = lazyImport(() => import('features/employee-management'), 'EmployeeManagement');

const { Employee } = lazyImport(() => import('features/employee'), 'Employee');

const { Login } = lazyImport(() => import('features/auth'), 'Login');

// const { EmployeeList } = lazyImport(() => import('features/employee'), 'EmployeeList');
// const { CompanyList } = lazyImport(() => import('features/company'), 'CompanyList');
// const { AddCompany } = lazyImport(() => import('features/company'), 'AddCompany');
// const { UsersList } = lazyImport(() => import('features/users'), 'UsersList');
// const { ChangePassword } = lazyImport(() => import('features/auth'), 'ChangePassword');
// const { AcceptInvitation } = lazyImport(() => import('features/auth'), 'AcceptInvitation');

const routes = {
  home: {
    path: '/',
    component: <Dashboard />,
  },
  login: {
    path: '/login',
    component: <Login />,
  },
  masterPage: {
    path: "/master-page",
    component: <MasterPage />
  },
  dailyReport: {
    path: "/daily-report",
    component: <DailyReport />
  },
  leaveManagement: {
    path: "/leave-management",
    component: <LeaveManagement />
  },
  employeeManagement: {
    path: "/employee-management",
    component: <EmployeeManagement />
  },
  addEmployee: {
    path: "/add-employee",
    component: <AddEmployee />
  },
  employee: {
    path: "/employee/:id",
    component: <Employee />
  },
  //   employee: {
  //     path: '/employee',
  //     component: EmployeeList,
  //   },
  //   company: {
  //     path: '/company',
  //     component: CompanyList,
  //   },
  //   addCompany: {
  //     path: '/company/add',
  //     component: AddCompany,
  //   },
  //   users: {
  //     path: '/users',
  //     component: UsersList,
  //   },
  //   passwordChange: {
  //     path: '/password-change',
  //     component: ChangePassword,
  //   },
  //   acceptInvitation: {
  //     path: '/invite/verify/:token',
  //     component: AcceptInvitation,
  //   },
  page404: {
    path: '*',
    component: Page404,
  },
};

export default routes;
