import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const MainRouter = React.lazy(() => import('./MainRouter'));

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <MainRouter />
            </Suspense>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
