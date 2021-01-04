import React from 'react';
import GlobalStyle from './style/globalStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Switch>
          <Route />
        </Switch>
      </BrowserRouter>
    </GlobalStyle>
  );
};

export default App;
