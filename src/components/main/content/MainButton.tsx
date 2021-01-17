import React, { FC } from 'react';
import * as S from '../style';

const MainButton: FC = ({ children }) => {
  return (
    <S.MainButton>
      <p>{children}</p>
      <div />
    </S.MainButton>
  );
};

export default MainButton;
