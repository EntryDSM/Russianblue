import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input, { PasswordInput } from '../../../default/input';

interface Props {
  disable: boolean;
  setPassword: (payload: string) => void;
}

const PasswordColumn: FC<Props> = ({ disable, setPassword }) => {
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <SignUpColumn
      text='비밀번호'
      description='영문(대소문자 구분),숫자 포함 8자리 이상 특수기호 가능'
    >
      <PasswordInput width={400} disable={disable} inputChangeHandler={passwordChangeHandler} />
    </SignUpColumn>
  );
};

export default PasswordColumn;
