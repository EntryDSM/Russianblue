import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  onClick: () => void;
}

const MainButton: FC<Props> = ({ children, onClick }) => {
  return (
    <S.MainButton onClick={onClick}>
      <p>{children}</p>
      <div />
    </S.MainButton>
  );
};

export default MainButton;
