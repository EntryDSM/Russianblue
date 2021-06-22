import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MainContainer,
  SignUpContainer,
  IntroductionContainer,
  SelectTypeContainer,
  InformationContainer,
  GradeContainer,
  PreviewContainer,
} from '../containers';
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
        <Route path='/introduction' component={IntroductionContainer} />
        <Route path='/select-type' component={SelectTypeContainer} />
        <Route path='/information' component={InformationContainer} />
        <Route path='/grade' component={GradeContainer} />
        <Route path='/preview' component={PreviewContainer} />
      </Switch>
      {Footer}
    </>
  );
};

export default MainRouter;
