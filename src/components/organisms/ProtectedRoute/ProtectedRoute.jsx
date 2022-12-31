import React, { Suspense, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from 'components/molecules';
import { AuthLayout } from 'components/organisms';
import auth from 'config/auth';
import { getCurrentUser } from 'features/auth/Api/auth';
import routes from 'config/routes';
import config from 'config';
import { removeToken } from 'utils/token';

export const ProtectedRoute = ({ children, roles }) => {
  const history = useNavigate();
  const isAuthed = auth.isAuthenticated();
  const dispatch = useDispatch();

  const { userResponse } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthed && isEmpty(userResponse)) {
      (async () => {
        const response = await dispatch(getCurrentUser());
        if (response.meta.requestStatus !== 'fulfilled') {
          removeToken({
            name: config.tokenName,
          });
          removeToken({
            name: config.refreshTokenName,
          });
          history(routes.login.path);
        }
      })();
    }
  }, [isAuthed, history, userResponse, dispatch]);

  const userHasRequiredRole = isAuthed && roles && roles.includes(userResponse?.role);

  const getChildren = () => {
    if (userHasRequiredRole) {
      return children;
    } else {
      return (
        <Navigate
          to={{
            pathname: isAuthed ? routes.home.path : routes.login.path,
          }}
        />
      );
    }
  };
  return (
    <AuthLayout>
      <React.Fragment>
        <Suspense fallback={<Spinner />}>{getChildren()}</Suspense>
      </React.Fragment>
    </AuthLayout>
  );
};
