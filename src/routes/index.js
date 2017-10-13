import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from '../pages/Start';
import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
