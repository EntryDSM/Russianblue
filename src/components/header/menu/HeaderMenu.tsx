import React, { FC } from 'react';
import * as S from '../style';
import HeaderButton from './HeaderButton';
import HeaderDropDown from './HeaderDropdown';

interface Props {
  isLogin: boolean;
  name: string;
  logout: () => void;
}

const HeaderMenu: FC<Props> = ({ isLogin, name, logout }) => {
  const userMenu = (
    <S.HeaderMenu>
      <HeaderButton buttonClickHandler={logout}>로그아웃</HeaderButton>
      <S.HeaderPartition>|</S.HeaderPartition>
      <HeaderDropDown name={name} />
    </S.HeaderMenu>
  );
  const renderMenu = () => {
    if (isLogin) {
      return userMenu;
    } else {
      return <S.HeaderMenu />;
    }
  };
  return renderMenu();
};

export default HeaderMenu;
