import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainContainer, SignUpContainer } from '../containers';
import { useFooter, useModal } from '../util/hooks/default';
import HeaderContainer from '../containers/header';

const MainRouter = () => {
  const Footer = useFooter();
  const Modal = useModal();
  return (
    <>
      <HeaderContainer />
      {Modal}
      <Switch>
        <Route path='/signup' component={SignUpContainer} />
        <Route exact path='/' component={MainContainer} />
      </Switch>
      {Footer}
    </>
  );
};

export default MainRouter;
