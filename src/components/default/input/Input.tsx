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
  name?: string;
  maxValue?: number;
  minValue?: number;
  value?: string;
}

const Input: FC<Props> = ({
  width,
  height,
  disable,
  placeholder,
  margin,
  inputChangeHandler,
  type,
  name,
  maxValue,
  minValue,
  value,
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
      name={name}
      max={maxValue}
      min={minValue}
      value={value}
    />
  );
};

export default Input;
