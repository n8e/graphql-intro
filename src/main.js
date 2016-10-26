import React from 'react';
import Relay from 'react-relay';
import { render } from 'react-dom';
import { RelayRouter } from 'react-router-relay';
import { Route, hashHistory, IndexRedirect } from 'react-router';

// views
// import Count from './views/count/Count';
import ErrorPage from './views/error/Error';

// app components
import App from './views/containers/App';


const renderFailure = () => <ErrorPage />;

export function routeQuery() {
  return {
    count: () => Relay.QL`query RootQueryType { count }`,
  };
}

const routes = (
  <RelayRouter history={hashHistory}>
    <Route path='/' component={App} queries={routeQuery()} renderFailure={renderFailure} />
  </RelayRouter>
);

render(routes, document.getElementById('wrapper'));
