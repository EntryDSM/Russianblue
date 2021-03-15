import React, { FC } from 'react';
import * as S from './style';
import MainContent from './content';
import Progress from './progress';
import { processType } from 'src/modules/redux/reducer/status/interface';
import { statusType } from 'src/modules/redux/reducer/status/mainConstance';

interface Props {
  status: statusType;
  process: processType;
  isLogin: boolean;
  date: string;
}

const Main: FC<Props> = ({ status, process, isLogin, date }) => {
  const mainButtonClickHandler = () => {};
  return (
    <S.Main>
      <S.MainBackground />
      <S.MainWrapper>
        <MainContent
          {...process}
          isLogin={isLogin}
          buttonClickHandler={mainButtonClickHandler}
          date={date}
        />
        <Progress status={status} date={date} />
      </S.MainWrapper>
    </S.Main>
  );
};

export default Main;
