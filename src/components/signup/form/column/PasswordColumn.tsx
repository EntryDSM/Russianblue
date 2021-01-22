import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';

interface Props {
  disable: boolean;
  setPassword: (payload: string) => void;
}

const PasswordColumn: FC<Props> = ({ disable, setPassword }) => {
  return (
    <SignUpColumn text='이름'>
      <Input width={400} disable={disable} setValue={setPassword} />
    </SignUpColumn>
  );
};

export default PasswordColumn;
