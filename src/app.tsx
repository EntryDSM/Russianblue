import React from 'react';
import GlobalStyle from './style/globalStyle';
import RootRouter from './route';
import { Provider } from 'react-redux';
import store from './modules/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
};

export default App;
