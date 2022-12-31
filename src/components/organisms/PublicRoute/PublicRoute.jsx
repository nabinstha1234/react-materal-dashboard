import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'components/molecules';
import { UnAuthLayout } from 'components/organisms';
import routes from 'config/routes';
import config from 'config';
import { getToken } from 'utils/token';

export const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = getToken({ name: config.tokenName });
  if (token) {
    navigate(routes.home.path);
  }

  return (
    <Suspense fallback={<Spinner />}>
      <UnAuthLayout />
      {children}
    </Suspense>
  );
};
