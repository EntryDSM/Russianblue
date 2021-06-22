import React, { FC, useEffect, useState } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';
import Button from '../../../default/button';
import Timer from '../../../modal/default/timer';
import { error } from '../../../../models/error';
import { CHECK_VERTIFY_CODE } from '../../../../modules/redux/action/signup';

interface Props {
  disable: boolean;
  setPhoneCode: (payload: string) => void;
  sendVertifyCode: (payload: string) => void;
  checkVertifyCode: (payload: { phoneNumber: string; code: string }) => void;
  isSendVertifyCode: boolean;
  isCheckVertifyCode: boolean;
  error: error;
  phoneNumber: string;
  phoneCode: string;
}

type TimeOut = ReturnType<typeof setTimeout>;
const MAX_TIME = 180;

const VertifyCodeColumn: FC<Props> = ({
  disable,
  setPhoneCode,
  isSendVertifyCode,
  isCheckVertifyCode,
  error,
  checkVertifyCode,
  sendVertifyCode,
  phoneNumber,
  phoneCode,
}) => {
  const phoneCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneCode(e.target.value);
  };
  const [timer, setTimer] = useState<TimeOut>();
  const [time, setTime] = useState<number>(MAX_TIME);

  const stopTimer = (timer: TimeOut) => {
    clearInterval(timer);
  };

  const resendVertifyCodeButtonClickHandler = () => {
    sendVertifyCode(phoneNumber);
  };

  const checkVertifyCodeButtonClickHandler = () => {
    checkVertifyCode({ phoneNumber, code: phoneCode });
  };

  useEffect(() => {
    if (!isSendVertifyCode) return;
    const timer = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    setTimer(timer);
    return () => {
      stopTimer(timer);
      setTime(MAX_TIME);
    };
  }, [isSendVertifyCode]);

  useEffect(() => {
    if (!isSendVertifyCode) return;
    if (time <= 0) {
      stopTimer(timer);
    }
  }, [time, isSendVertifyCode]);

  return (
    <SignUpColumn
      text='인증번호'
      description={
        error.type === CHECK_VERTIFY_CODE
          ? '인증번호를 확인해 주세요.'
          : '혹시 이메일이 오지 않았다면 입력한 이메일을 확인해 주세요'
      }
    >
      <div>
        <Input
          width={216}
          disable={disable}
          margin='0px 7px 0px 0px'
          inputChangeHandler={phoneCodeChangeHandler}
        />
        <Button
          width={78}
          disable={disable}
          margin='7px'
          onClick={checkVertifyCodeButtonClickHandler}
        >
          인증
        </Button>
        <Button
          width={78}
          disable={disable}
          margin='7px'
          onClick={resendVertifyCodeButtonClickHandler}
        >
          재전송
        </Button>
        {isSendVertifyCode && !isCheckVertifyCode ? (
          <Timer time={time} marginBottom={0} marginLeft={25} />
        ) : (
          ''
        )}
      </div>
    </SignUpColumn>
  );
};

export default VertifyCodeColumn;
