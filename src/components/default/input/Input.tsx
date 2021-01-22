import React, { FC } from 'react';
import * as S from './style';

interface Props {
  width?: number;
  height?: number;
  disable?: boolean;
  placeholder?: string;
  margin?: string;
  setValue: (value: string) => void;
}

const Input: FC<Props> = ({ width, height, disable, placeholder, margin, setValue }) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <S.Input
      width={width}
      height={height}
      disable={disable}
      placeholder={placeholder}
      margin={margin}
      onChange={inputChangeHandler}
      disabled={disable}
    />
  );
};

export default Input;
