import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Components
import Home from 'components/pages/HomePage';
import SpherePage from 'components/pages/SpherePage';
import Auth from 'features/auth/components/Auth';

// Types
import type { ReactElement } from 'react';

type RoutePath = '/' | '/auth' | '/sphere/:sphereId';

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
const SpherePagePath: RoutePath = '/sphere/:sphereId';

const RouteUrl = {
  HomePagePath,
  AuthPagePath,
  SpherePagePath
};

const routes: RouteType[] = [
  {
    path: HomePagePath,
    exact: true,
    component: Home
  },
  {
    path: SpherePagePath,
    exact: true,
    component: SpherePage
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

export { RouteUrl };

export default RoutesWrapper;
