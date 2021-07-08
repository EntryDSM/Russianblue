import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  onClick: () => void;
  isButtonAble: boolean;
}

const MainButton: FC<Props> = ({ children, onClick, isButtonAble }) => {
  return (
    <S.MainButton onClick={onClick} disabled={isButtonAble}>
      <p>{children}</p>
      <div />
    </S.MainButton>
  );
};

export default MainButton;
