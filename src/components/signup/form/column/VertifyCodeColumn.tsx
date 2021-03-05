import React, { FC } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';
import Button from '../../../default/button';

interface Props {
  disable: boolean;
  setPhoneCode: (payload: string) => void;
}

const VertifyCodeColumn: FC<Props> = ({ disable, setPhoneCode }) => {
  const phoneCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneCode(e.target.value);
  };
  return (
    <SignUpColumn text='인증번호'>
      <div>
        <Input
          width={216}
          disable={disable}
          margin='0px 7px 0px 0px'
          inputChangeHandler={phoneCodeChangeHandler}
        />
        <Button width={78} disable={disable} margin='7px'>
          인증
        </Button>
        <Button width={78} disable={disable} margin='7px'>
          재전송
        </Button>
      </div>
    </SignUpColumn>
  );
};

export default VertifyCodeColumn;
