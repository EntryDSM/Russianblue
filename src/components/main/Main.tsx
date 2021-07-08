import React, { FC } from 'react';
import * as S from './style';
import MainContent from './content';
import Progress from './progress';
import { processType } from 'src/modules/redux/reducer/status/interface';
import { statusType } from 'src/modules/redux/reducer/status/mainConstance';
import { error } from 'src/models/error';
import { useHistory } from 'react-router-dom';

interface Props {
  status: statusType;
  process: processType;
  isLogin: boolean;
  date: string;
  error: error;
  defaultMainButtonClickHandler: () => void;
}

const Main: FC<Props> = ({ status, process, isLogin, date, defaultMainButtonClickHandler }) => {
  const history = useHistory();
  const mainButtonClickHandler = () => {
    console.log(isLogin);
    if (isLogin) {
      history.push(process.uri);
    } else {
      defaultMainButtonClickHandler();
    }
  };
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
