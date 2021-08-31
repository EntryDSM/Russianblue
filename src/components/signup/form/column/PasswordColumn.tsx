import React, { FC, useEffect, useState } from 'react';
import SignUpColumn from './SignUpColumn';
import { PasswordInput } from '../../../default/input';
import Timer from '../../../modal/default/timer';
import { error } from '../../../../models/error';

interface Props {
  disable: boolean;
  setPassword: (payload: string) => void;
  isCheckVertifyCode: boolean;
  error: error;
}

type TimeOut = ReturnType<typeof setTimeout>;
const MAX_TIME = 180;

const PasswordColumn: FC<Props> = ({ disable, setPassword, isCheckVertifyCode, error }) => {
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const [timer, setTimer] = useState<TimeOut>();
  const [time, setTime] = useState<number>(MAX_TIME);

  const stopTimer = (timer: TimeOut) => {
    clearInterval(timer);
  };
  useEffect(() => {
    if (!isCheckVertifyCode) return;
    const timer = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    setTimer(timer);
    return () => {
      stopTimer(timer);
      setTime(MAX_TIME);
    };
  }, [isCheckVertifyCode]);

  useEffect(() => {
    if (!isCheckVertifyCode) return;
    if (time <= 0) {
      stopTimer(timer);
    }
  }, [time, isCheckVertifyCode]);

  return (
    <SignUpColumn
      text='비밀번호'
      description={
        error.type === 'signup/SIGNUP'
          ? '영문(대소문자 구분),숫자 포함 8자리 이상 특수기호에 맞춰주세요.'
          : '영문(대소문자 구분),숫자 포함 8자리 이상 특수기호 가능'
      }
    >
      <PasswordInput width={400} disable={disable} inputChangeHandler={passwordChangeHandler} />
      {isCheckVertifyCode ? <Timer time={time} marginBottom={0} marginLeft={25} /> : ''}
    </SignUpColumn>
  );
};

export default PasswordColumn;
