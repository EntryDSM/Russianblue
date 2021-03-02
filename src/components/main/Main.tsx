import React, { FC } from 'react';
import * as S from './style';
import MainContent from './content';
import Progress from './progress';
import { processType } from 'src/modules/redux/action/status/interface';

interface Props {
  status: string;
  process: processType;
  isLogin: boolean;
}

const Main: FC<Props> = ({ status, process, isLogin }) => {
  const mainButtonClickHandler = () => {};
  return (
    <S.Main>
      <S.MainBackground />
      <S.MainWrapper>
        <MainContent {...process} isLogin={isLogin} buttonClickHandler={mainButtonClickHandler} />
        <Progress status={status} />
      </S.MainWrapper>
    </S.Main>
  );
};

export default Main;
