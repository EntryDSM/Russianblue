import React, { FC } from 'react';
import * as S from './style';

interface Props {
  width?: number;
  height?: number;
  disable: boolean;
  margin?: string;
}

const Button: FC<Props> = ({ width, height, disable, children, margin }) => {
  return (
    <S.Button width={width} height={height} disable={disable} margin={margin}>
      {children}
    </S.Button>
  );
};

export default Button;
