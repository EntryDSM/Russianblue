import React from 'react';
import * as S from './style';
import HeaderMenu from './menu';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderIcon />
      <HeaderMenu name='오준상' isLogin={true} />
    </S.Header>
  );
};

export default Header;
