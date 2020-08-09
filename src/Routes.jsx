import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>index</div>} />
      <Route exact path="/standings" component={() => <div>standings</div>} />
      <Route exact path="/players" component={() => <div>players</div>} />
      <Route exact path="/teams" component={() => <div>teams</div>} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  );
};

export default Routes;
