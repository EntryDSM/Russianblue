import React, { FC, useMemo } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';
import Button from '../../../default/button';
import { error } from '../../../../models/error';
import { SEND_VERTIFY_CODE } from '../../../../modules/redux/action/signup';
import { isEmail } from '../../../../util/util/format';

interface Props {
  disable: boolean;
  isSendVertifyCode: boolean;
  setPhoneNumber: (payload: string) => void;
  sendVertifyCode: (phoneNumber: string) => void;
  phoneNumber: string;
  error: error;
}

const PhoneNumberColumn: FC<Props> = ({
  disable,
  setPhoneNumber,
  isSendVertifyCode,
  sendVertifyCode,
  phoneNumber,
  error,
}) => {
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const sendVertifyCodeButtonClickHandler = () => {
    sendVertifyCode(phoneNumber);
  };
  const description = useMemo(() => {
    if (phoneNumber.length > 0 && !isEmail(phoneNumber)) return '이메일 형식을 확인해 주세요.';
    if (isSendVertifyCode) {
      return '해당 이메일로 인증번호를 보냈습니다.';
    }
    if (error.type === SEND_VERTIFY_CODE && error.status === 400) {
      return '이메일을 확인해 주세요.';
    }
    if (error.type === SEND_VERTIFY_CODE && error.status === 429) {
      return '이메일 전송 한도를 초과했습니다. 잠시 후에 시도해 주세요.';
    }
    if (error.type === SEND_VERTIFY_CODE && error.status === 409) {
      return '이미 사용된 이메일 입니다. 다른 이메일을 사용해 주세요.';
    }
  }, [isSendVertifyCode, error.type]);
  return (
    <SignUpColumn text='이메일' description={description}>
      <Input
        width={308}
        disable={disable}
        margin='0px 7px 0px 0px'
        inputChangeHandler={phoneNumberChangeHandler}
      />
      <Button
        width={78}
        disable={disable || !isEmail(phoneNumber)}
        margin='0px 0px 0px 7px'
        onClick={sendVertifyCodeButtonClickHandler}
      >
        전송
      </Button>
    </SignUpColumn>
  );
};

export default PhoneNumberColumn;
