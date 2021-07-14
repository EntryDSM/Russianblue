import React, { FC, useState } from 'react';
import * as S from './style';

interface Props {
  width?: number;
  height?: number;
  disable?: boolean;
  placeholder?: string;
  margin?: string;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keypressHandler?: (event: React.KeyboardEvent) => void;
}

const PasswordInput: FC<Props> = ({
  width,
  height,
  disable,
  placeholder,
  margin,
  inputChangeHandler,
  keypressHandler,
}) => {
  const [isPasswordWatchAble, setWatchAble] = useState(false);
  const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWatchAble(event.target.checked);
  };
  const getPasswordInputType = (isPasswordWatchAble: boolean) => {
    return isPasswordWatchAble ? 'text' : 'password';
  };
  return (
    <S.PasswordInput width={width} height={height} margin={margin}>
      <input
        disabled={disable}
        placeholder={placeholder}
        type={getPasswordInputType(isPasswordWatchAble)}
        onChange={inputChangeHandler}
        onKeyPress={keypressHandler}
      />
      <label>
        <input type='checkbox' onChange={checkboxChangeHandler} checked={isPasswordWatchAble} />
        <div />
      </label>
    </S.PasswordInput>
  );
};

export default PasswordInput;
