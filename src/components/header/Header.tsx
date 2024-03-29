import React, { FC, useEffect } from 'react';
import * as S from './style';
import HeaderMenu from './menu';
import { error } from '../../models/error';
import { useHistory } from 'react-router-dom';

interface Props {
  isLogin: boolean;
  name: string;
  phoneNumber: string;
  isfinalSubmitDone: boolean;
  isReceiveMail: boolean;
  studyPlanLength: number;
  selfIntroduceLength: number;
  setIsLogin: (value: boolean) => void;
  applicationType: string;
  setAccessToken: (value: string) => void;
  error: error;
}

const Header: FC<Props> = props => {
  const history = useHistory();
  const logout = () => {
    props.setIsLogin(false);
    props.setAccessToken('');
    localStorage.removeItem('access_token');
    history.push('/');
  };
  const logoClickHandler = () => {
    history.push('/');
  };

  return (
    <S.Header>
      <S.HeaderIcon onClick={logoClickHandler} />
      <HeaderMenu {...props} logout={logout} />
    </S.Header>
  );
};

export default Header;
