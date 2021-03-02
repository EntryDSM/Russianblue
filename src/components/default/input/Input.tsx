import React, { FC } from 'react';
import * as S from './style';

interface Props {
  width?: number;
  height?: number;
  disable?: boolean;
  placeholder?: string;
  margin?: string;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: FC<Props> = ({
  width,
  height,
  disable,
  placeholder,
  margin,
  inputChangeHandler,
  type,
}) => {
  return (
    <S.Input
      width={width}
      height={height}
      disable={disable}
      placeholder={placeholder}
      margin={margin}
      onChange={inputChangeHandler}
      disabled={disable}
      type={type}
    />
  );
};

export default Input;
