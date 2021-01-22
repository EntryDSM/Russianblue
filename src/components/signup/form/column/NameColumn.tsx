import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';

interface Props {
  disable: boolean;
  setName: (payload: string) => void;
}

const NameColumn: FC<Props> = ({ disable, setName }) => {
  return (
    <SignUpColumn text='이름'>
      <Input width={400} disable={disable} setValue={setName} />
    </SignUpColumn>
  );
};

export default NameColumn;
