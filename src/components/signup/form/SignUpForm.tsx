import React, { FC } from 'react';
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
  isSendVertifyCode,
  isCheckVertifyCode,
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
      />
      <VertifyColumn
        disable={!ruleCheck || !isSendVertifyCode}
        setPhoneCode={setPhoneCode}
        isSendVertifyCode={isSendVertifyCode}
      />
      <PasswordColumn disable={!ruleCheck || !isSendVertifyCode} setPassword={setPassword} />
    </S.SignUpContent>
  );
};

export default SignUpForm;
