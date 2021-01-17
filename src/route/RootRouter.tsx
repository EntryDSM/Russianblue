import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainRouter from './MainRouter';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainRouter} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
