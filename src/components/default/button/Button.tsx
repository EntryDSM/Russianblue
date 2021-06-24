import React, { FC } from 'react';
import * as S from './style';

interface Props {
  width?: number;
  height?: number;
  disable: boolean;
  margin?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ width, height, disable, children, margin, onClick }) => {
  return (
    <S.Button width={width} height={height} disable={disable} margin={margin} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
