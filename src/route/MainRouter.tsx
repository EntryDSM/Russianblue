import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainContainer, SignUpContainer } from '../containers';
import { useHeader, useFooter, useModal } from '../util/hooks/default';

const MainRouter = () => {
  const Header = useHeader();
  const Footer = useFooter();
  const Modal = useModal();
  return (
    <>
      {Header}
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
