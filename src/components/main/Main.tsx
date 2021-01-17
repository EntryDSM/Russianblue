import React from 'react';
import * as S from './style';
import MainContent from './content';
import Progress from './progress';

const Main = () => {
  return (
    <S.Main>
      <S.MainBackground />
      <S.MainWrapper>
        <MainContent nowProcess='test' date='2020년 00월 00일' />
        <Progress />
      </S.MainWrapper>
    </S.Main>
  );
};

export default Main;
