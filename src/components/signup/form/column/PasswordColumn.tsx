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
    <SignUpColumn text='비밀번호'>
      <PasswordInput width={400} disable={disable} inputChangeHandler={passwordChangeHandler} />
    </SignUpColumn>
  );
};

export default PasswordColumn;
