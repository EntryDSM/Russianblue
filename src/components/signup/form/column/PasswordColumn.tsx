import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';

interface Props {
  disable: boolean;
  setPassword: (payload: string) => void;
}

const PasswordColumn: FC<Props> = ({ disable, setPassword }) => {
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <SignUpColumn text='이름'>
      <Input width={400} disable={disable} inputChangeHandler={passwordChangeHandler} />
    </SignUpColumn>
  );
};

export default PasswordColumn;
