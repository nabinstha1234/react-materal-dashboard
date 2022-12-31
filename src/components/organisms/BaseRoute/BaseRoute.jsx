import { Suspense, Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Spinner } from 'components/molecules';

export const BaseRoute = (props) => {
  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Route path={props.path} component={props.component} exact={props.exact} />
      </Suspense>
    </Fragment>
  );
};
