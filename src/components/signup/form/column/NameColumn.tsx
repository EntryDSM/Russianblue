import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';

interface Props {
  disable: boolean;
}

const NameColumn: FC<Props> = ({ disable }) => {
  return (
    <SignUpColumn text='이름'>
      <Input width={400} disable={disable} />
    </SignUpColumn>
  );
};

export default NameColumn;
