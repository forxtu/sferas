import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from 'components/pages/HomePage';

type RoutePath = '/';

type RouteType = {
  path: RoutePath;
  exact: boolean;
  component: React.FC;
};

const HomePagePath: RoutePath = '/';

const routes: RouteType[] = [
  {
    path: HomePagePath,
    exact: true,
    component: Home
  }
];

const RoutesWrapper = (): ReactElement => (
  <Router>
    <Switch>
      {routes.map(
        ({ path, exact, component }: RouteType, index: number): ReactElement => (
          <Route exact={exact} path={path} component={component} key={index} />
        )
      )}
      <Route render={() => 'Not found'} />
    </Switch>
  </Router>
);

export default RoutesWrapper;
