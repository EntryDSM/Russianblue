import React, { FC } from 'react';
import * as S from './style';
import HeaderMenu from './menu';
import { error } from 'src/models/error';

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
  error: error;
}

const Header: FC<Props> = props => {
  const logout = () => {
    props.setIsLogin(false);
    props.setAccessToken('');
  };
  return (
    <S.Header>
      <S.HeaderIcon />
      <HeaderMenu {...props} logout={logout} />
    </S.Header>
  );
};

export default Header;
