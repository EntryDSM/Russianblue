import React, { FC } from 'react';
import * as S from './style';

interface Props {
  width?: number;
  height?: number;
  disable?: boolean;
  placeholder?: string;
  margin?: string;
}

const Input: FC<Props> = ({ width, height, disable, placeholder, margin }) => {
  return (
    <S.Input
      width={width}
      height={height}
      disable={disable}
      placeholder={placeholder}
      margin={margin}
    />
  );
};

export default Input;
