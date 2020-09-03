import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Components
import Home from 'components/pages/HomePage';
import Auth from 'features/auth/components';

// Types
import type { ReactElement } from 'react';

type RoutePath = '/' | '/auth';

type RouteType = {
  path: RoutePath;
  exact: boolean;
  component: React.FC;
};

type PrivateRouteType = {
  component: React.FC;
  user: string;
  path: string;
  exact: boolean;
};

const HomePagePath: RoutePath = '/';
const AuthPagePath: RoutePath = '/auth';

const routes: RouteType[] = [
  {
    path: HomePagePath,
    exact: true,
    component: Home
  }
];

const PrivateRoute = ({
  component: Component,
  user,
  ...rest
}: PrivateRouteType): ReactElement => (
  <Route
    {...rest}
    render={(props: any): ReactElement =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: AuthPagePath,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const RoutesWrapper = ({ user }: { user: string }): ReactElement => (
  <Router>
    <Switch>
      {routes.map(
        (
          { path, exact, component }: RouteType,
          index: number
        ): ReactElement => (
          <PrivateRoute
            exact={exact}
            path={path}
            component={component}
            key={index}
            user={user}
          />
        )
      )}
      <Route exact path={AuthPagePath} component={Auth} />
      <Route render={(): ReactElement => <p>Not found</p>} />
    </Switch>
    <Switch>
      {user ? <Redirect exact from={AuthPagePath} to={HomePagePath} /> : null}
    </Switch>
  </Router>
);

export default RoutesWrapper;
