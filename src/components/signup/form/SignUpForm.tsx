import React, { FC } from 'react';
import { error } from '../../../models/error';
import { isOneOfTextEmpty } from '../../../util/util';
import * as S from '../style';
import { NameColumn, PhoneNumberColumn, VertifyColumn, PasswordColumn } from './column';

interface Props {
  name: string;
  phoneNumber: string;
  phoneCode: string;
  password: string;
  ruleCheck: boolean;
  isSendVertifyCode: boolean;
  isCheckVertifyCode: boolean;
  setPassword: (payload: string) => void;
  setPhoneCode: (payload: string) => void;
  setName: (payload: string) => void;
  setPhoneNumber: (payload: string) => void;
  sendVertifyCode: (payload: string) => void;
  checkVertifyCode: (payload: { phoneNumber: string; code: string }) => void;
  error: error;
}

const SignUpForm: FC<Props> = ({
  ruleCheck,
  name,
  phoneCode,
  phoneNumber,
  setPassword,
  setPhoneCode,
  setPhoneNumber,
  setName,
  sendVertifyCode,
  checkVertifyCode,
  isSendVertifyCode,
  isCheckVertifyCode,
  error,
}) => {
  return (
    <S.SignUpContent>
      <NameColumn disable={!ruleCheck} setName={setName} />
      <PhoneNumberColumn
        isSendVertifyCode={isSendVertifyCode}
        sendVertifyCode={sendVertifyCode}
        disable={!ruleCheck || isOneOfTextEmpty(name)}
        setPhoneNumber={setPhoneNumber}
        phoneNumber={phoneNumber}
        error={error}
      />
      <VertifyColumn
        disable={!ruleCheck || !isSendVertifyCode || isCheckVertifyCode}
        setPhoneCode={setPhoneCode}
        isSendVertifyCode={isSendVertifyCode}
        isCheckVertifyCode={isCheckVertifyCode}
        error={error}
        checkVertifyCode={checkVertifyCode}
        sendVertifyCode={sendVertifyCode}
        phoneNumber={phoneNumber}
        phoneCode={phoneCode}
      />
      <PasswordColumn
        disable={!ruleCheck || !isSendVertifyCode}
        setPassword={setPassword}
        isCheckVertifyCode={isCheckVertifyCode}
        error={error}
      />
    </S.SignUpContent>
  );
};

export default SignUpForm;
