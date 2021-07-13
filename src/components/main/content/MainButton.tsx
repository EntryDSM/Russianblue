import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  onClick: () => void;
  isAble?: boolean;
}

const MainButton: FC<Props> = ({ children, onClick, isAble }) => {
  return (
    <S.MainButton onClick={onClick} isAble={isAble}>
      <p>{children}</p>
      <div />
    </S.MainButton>
  );
};

export default MainButton;
