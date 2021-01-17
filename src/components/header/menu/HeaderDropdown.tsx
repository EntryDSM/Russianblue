import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  name: string;
}

const HeaderDropDown: FC<Props> = ({ name }) => {
  return (
    <S.HeaderDropDown>
      <S.HeaderMenuUser>
        <span>{name}</span>님 환영합니다
      </S.HeaderMenuUser>
      <input type='checkbox' />
      <S.HeaderDropdownArrowButton />
      <S.HeaderDropdownContent />
    </S.HeaderDropDown>
  );
};

export default HeaderDropDown;
