import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from 'config/routes';
import { BaseRoute, ProtectedRoute, PublicRoute } from 'components/organisms';
import config from 'config';

const {
  roles: { Admin, Manager, Employee, HR },
} = config;

const allRoles = [Employee, Manager, Admin, HR];

export const Routes = () => {
  return (
    <>
      {useRoutes([
        {
          path: routes.home.path,
          element: <ProtectedRoute roles={allRoles}>{routes.home.component}</ProtectedRoute>,
        },
        {
          path: routes.masterPage.path,
          element: (
            <ProtectedRoute roles={[Admin, HR]}>{routes.masterPage.component}</ProtectedRoute>
          ),
        },
        {
          path: routes.dailyReport.path,
          element: (
            <ProtectedRoute roles={[Admin, HR]}>{routes.dailyReport.component}</ProtectedRoute>
          ),
        },
        {
          path: routes.leaveManagement.path,
          element: (
            <ProtectedRoute roles={[Admin, HR]}>{routes.leaveManagement.component}</ProtectedRoute>
          ),
        },
        {
          path: routes.employeeManagement.path,
          element: (
            <ProtectedRoute roles={[Admin, HR]}>
              {routes.employeeManagement.component}
            </ProtectedRoute>
          ),
        },
        {
          path: routes.addEmployee.path,
          element: (
            <ProtectedRoute roles={[Admin, HR]}>{routes.addEmployee.component}</ProtectedRoute>
          ),
        },
        {
          path: routes.employee.path,
          element: <ProtectedRoute roles={[Admin, HR]}>{routes.employee.component}</ProtectedRoute>,
        },
        {
          path: routes.login.path,
          element: <PublicRoute>{routes.login.component}</PublicRoute>,
        },
        {
          path: '*',
          element: (
            <BaseRoute>
              <div>404</div>
            </BaseRoute>
          ),
        },
      ])}
    </>
  );
};
