import { ReactIcon } from 'components/molecules';
import config from 'config';

const getIcon = (name) => <ReactIcon icon={name} width={22} height={22} />;

const {
  roles: { Admin, SuperAdmin, Employee },
} = config;

const allRole = [SuperAdmin, Admin, Employee];

const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: getIcon('eva:pie-chart-2-fill'),
    roles: allRole,
  },
];

export default sidebarConfig;
