import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';
import Button from '../../../default/button';

interface Props {
  disable: boolean;
  setPhoneNumber: (payload: string) => void;
}

const PhoneNumberColumn: FC<Props> = ({ disable, setPhoneNumber }) => {
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <SignUpColumn text='전화번호'>
      <Input
        width={308}
        disable={disable}
        margin='0px 7px 0px 0px'
        inputChangeHandler={phoneNumberChangeHandler}
      />
      <Button width={78} disable={disable} margin='0px 0px 0px 7px'>
        전송
      </Button>
    </SignUpColumn>
  );
};

export default PhoneNumberColumn;
