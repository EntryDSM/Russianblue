import React, { FC } from 'react';
import * as S from '../style';
import HeaderButton from './HeaderButton';
import HeaderDropDown from './HeaderDropdown';

interface Props {
  isLogin: boolean;
  name: string;
}

const HeaderMenu: FC<Props> = ({ isLogin, name }) => {
  const userMenu = (
    <S.HeaderMenu>
      <HeaderButton buttonClickHandler={() => {}}>로그아웃</HeaderButton>
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
