import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';
import Button from '../../../default/button';

interface Props {
  disable: boolean;
  isSendVertifyCode: boolean;
  setPhoneNumber: (payload: string) => void;
  sendVertifyCode: (phoneNumber: string) => void;
  phoneNumber: string;
}

const PhoneNumberColumn: FC<Props> = ({
  disable,
  setPhoneNumber,
  isSendVertifyCode,
  sendVertifyCode,
  phoneNumber,
}) => {
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const sendVertifyCodeButtonClickHandler = () => {
    console.log('send');
    sendVertifyCode(phoneNumber);
  };
  return (
    <SignUpColumn
      text='전화번호'
      description={true ? '해당 전화번호로 인증번호를 보냈습니다.' : ''}
    >
      <Input
        width={308}
        disable={disable}
        margin='0px 7px 0px 0px'
        inputChangeHandler={phoneNumberChangeHandler}
      />
      <Button
        width={78}
        disable={disable}
        margin='0px 0px 0px 7px'
        onClick={sendVertifyCodeButtonClickHandler}
      >
        전송
      </Button>
    </SignUpColumn>
  );
};

export default PhoneNumberColumn;
