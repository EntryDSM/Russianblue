import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  buttonClickHandler: () => void;
}

const HeaderButton: FC<Props> = ({ children, buttonClickHandler }) => {
  return <S.HeaderButton onClick={buttonClickHandler}>{children}</S.HeaderButton>;
};

export default HeaderButton;
