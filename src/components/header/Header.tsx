import React, { FC } from 'react';
import * as S from './style';
import HeaderMenu from './menu';

interface Props {
  isLogin: boolean;
  name: string;
  setIsLogin: (value: boolean) => void;
  setAccessToken: (value: string) => void;
}

const Header: FC<Props> = ({ isLogin, name, setIsLogin, setAccessToken }) => {
  const logout = () => {
    setIsLogin(false);
    setAccessToken('');
  };
  return (
    <S.Header>
      <S.HeaderIcon />
      <HeaderMenu name={name} isLogin={isLogin} logout={logout} />
    </S.Header>
  );
};

export default Header;
