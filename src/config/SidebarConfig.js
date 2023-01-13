import { ReactIcon } from 'components/molecules';
import config from 'config';

const getIcon = (name) => <ReactIcon icon={name} width={30} height={30} />;

const {
  roles: { Admin, Manager, Employee, HR },
} = config;

const allRole = [Manager, Admin, Employee, HR];

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: getIcon('ph:house-light'),
    fillIcon: getIcon('mdi:house'),
    roles: allRole,
  },
  {
    title: 'Users',
    path: '/users',
    icon: getIcon('ic:outline-today'),
    fillIcon: getIcon('ic:round-today'),
    roles: allRole,
  },
  {
    title: 'log',
    path: '/log',
    icon: getIcon('material-symbols:receipt-long-outline-rounded'),
    fillIcon: getIcon('material-symbols:receipt-long-rounded'),
    roles: allRole,
  },
  {
    title: 'Account',
    path: '/account',
    icon: getIcon('material-symbols:account-balance-outline'),
    fillIcon: getIcon('material-symbols:account-balance'),
    roles: allRole,
  },
  {
    title: 'Event',
    path: '/event',
    icon: getIcon('material-symbols:event-busy-outline'),
    fillIcon: getIcon('material-symbols:event-busy'),
    roles: allRole,
  },
  {
    title: 'Description',
    path: '/description',
    icon: getIcon('material-symbols:description-outline'),
    fillIcon: getIcon('material-symbols:description'),
    roles: allRole,
  },
  {
    title: 'Leave Management',
    path: '/leave-management',
    icon: getIcon('material-symbols:edit-calendar'),
    fillIcon: getIcon('material-symbols:edit-calendar'),
    roles: [SuperAdmin, Admin],
  },
  {
    title: 'Employee Management',
    path: '/employee-management',
    icon: getIcon('ic:sharp-people-outline'),
    fillIcon: getIcon('ic:sharp-people-outline'),
    roles: [SuperAdmin, Admin],
  },
  {
    title: 'Daily Report',
    path: '/daily-report',
    icon: getIcon('material-symbols:bar-chart'),
    fillIcon: getIcon('material-symbols:bar-chart'),
    roles: [SuperAdmin, Admin],
  },
  {
    title: 'Master Page',
    path: '/master-page',
    icon: getIcon('ri:user-settings-line'),
    fillIcon: getIcon('ri:user-settings-line'),
    roles: [SuperAdmin, Admin],
  },
];

export default sidebarConfig;
