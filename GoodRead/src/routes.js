import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import GoodReads from './containers/Goodreads';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={GoodReads} />
        {/* <Route path={RouteConstants.CONTACTS} component={ContactsContainer} /> */}
      </Switch>
    </React.Fragment>
  </Router >
);

export default Routes;

