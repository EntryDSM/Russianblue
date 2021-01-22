import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';
import Button from '../../../default/button';

interface Props {
  disable: boolean;
  setPhoneCode: (payload: string) => void;
}

const VertifyCodeColumn: FC<Props> = ({ disable, setPhoneCode }) => {
  return (
    <SignUpColumn text='전화번호'>
      <Input width={216} disable={disable} margin='0px 7px 0px 0px' setValue={setPhoneCode} />
      <Button width={78} disable={disable} margin='7px'>
        인증
      </Button>
      <Button width={78} disable={disable} margin='7px'>
        재전송
      </Button>
    </SignUpColumn>
  );
};

export default VertifyCodeColumn;
