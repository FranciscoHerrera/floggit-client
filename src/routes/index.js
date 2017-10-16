import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from '../pages/Start';
import Whiteboard from '../pages/Whiteboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route exact path="/whiteboard/:id" component={Whiteboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
