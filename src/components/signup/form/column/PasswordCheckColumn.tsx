import React, { FC, useMemo, useState } from 'react';
import SignUpColumn from './SignUpColumn';
import { PasswordInput } from '../../../default/input';

interface Props {
  disable: boolean;
  password: string;
  passwordCheck: string;
  setPasswordCheck: (payload: string) => void;
}

const PasswordCheckColumn: FC<Props> = ({ disable, password, passwordCheck, setPasswordCheck }) => {
  const passwordCheckChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const isSamePasswordAndPasswordCheck = useMemo(
    () => passwordCheck === password && password.length > 0,
    [password, passwordCheck],
  );

  const description = useMemo(() => {
    if (password.length <= 0) return '';
    else if (isSamePasswordAndPasswordCheck) return '확인 되었습니다.';
    return '비밀번호가 같지 않습니다.';
  }, [password, isSamePasswordAndPasswordCheck]);

  return (
    <SignUpColumn text='비밀번호 확인' description={description}>
      <PasswordInput
        width={400}
        disable={disable}
        inputChangeHandler={passwordCheckChangeHandler}
      />
    </SignUpColumn>
  );
};

export default PasswordCheckColumn;
