import React, { FC, useEffect, useState } from 'react';
import SignUpColumn from './SignUpColumn';
import Input from '../../../default/input';
import Button from '../../../default/button';
import Timer from '../../../modal/default/timer';

interface Props {
  disable: boolean;
  setPhoneCode: (payload: string) => void;
  isSendVertifyCode: boolean;
}

type TimeOut = ReturnType<typeof setTimeout>;
const MAX_TIME = 180;

const VertifyCodeColumn: FC<Props> = ({ disable, setPhoneCode, isSendVertifyCode }) => {
  const phoneCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneCode(e.target.value);
  };
  const [timer, setTimer] = useState<TimeOut>();
  const [time, setTime] = useState<number>(MAX_TIME);

  const stopTimer = (timer: TimeOut) => {
    clearInterval(timer);
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
      description='혹시 문자가 오지 않았다면 입력한 전화번호를 확인해 주세요'
    >
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
        {isSendVertifyCode ? <Timer time={time} marginBottom={0} marginLeft={25} /> : ''}
      </div>
    </SignUpColumn>
  );
};

export default VertifyCodeColumn;
