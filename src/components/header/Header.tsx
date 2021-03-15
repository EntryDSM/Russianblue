import React, { FC } from 'react';
import * as S from './style';
import HeaderMenu from './menu';

interface Props {
  isLogin: boolean;
  name: string;
  phoneNumber: string;
  isfinalSubmitDone: boolean;
  isAdmissionFeePayed: boolean;
  isReceiveMail: boolean;
  studyPlanLength: number;
  selfIntroduceLength: number;
  setIsLogin: (value: boolean) => void;
  setAccessToken: (value: string) => void;
}

const Header: FC<Props> = state => {
  const logout = () => {
    state.setIsLogin(false);
    state.setAccessToken('');
  };
  return (
    <S.Header>
      <S.HeaderIcon />
      <HeaderMenu {...state} logout={logout} />
    </S.Header>
  );
};

export default Header;
