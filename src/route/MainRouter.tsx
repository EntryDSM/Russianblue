import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainContainer, SignUpContainer } from '../containers';
import useHeader from '../util/hooks/useHeader';
import useFooter from '../util/hooks/useFooter';

const MainRouter = () => {
  const Header = useHeader();
  const Footer = useFooter();
  return (
    <>
      {Header}
      <Switch>
        <Route path='/signup' component={SignUpContainer} />
        <Route exact path='/' component={MainContainer} />
      </Switch>
      {Footer}
    </>
  );
};

export default MainRouter;
