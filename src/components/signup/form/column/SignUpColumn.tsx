import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  text: string;
}

const SignUpColumn: FC<Props> = ({ children, text }) => {
  return (
    <S.SignUpItem>
      <S.SignUpItemText>{text}</S.SignUpItemText>
      {children}
    </S.SignUpItem>
  );
};

export default SignUpColumn;
