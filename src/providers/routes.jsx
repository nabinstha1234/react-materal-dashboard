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
