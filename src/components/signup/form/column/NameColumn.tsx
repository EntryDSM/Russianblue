import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';

interface Props {
  disable: boolean;
  setName: (payload: string) => void;
}

const NameColumn: FC<Props> = ({ disable, setName }) => {
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <SignUpColumn text='이름'>
      <Input width={400} disable={disable} inputChangeHandler={nameChangeHandler} />
    </SignUpColumn>
  );
};

export default NameColumn;
