import React, { FC } from 'react';
import { isSignUpDataAble } from '../../../util/util';
import * as S from '../style';
import { NameColumn, PhoneNumberColumn, VertifyColumn, PasswordColumn } from './column';

interface Props {
  name: string;
  phoneNumber: string;
  phoneCode: string;
  password: string;
  ruleCheck: boolean;
  setPassword: (payload: string) => void;
  setPhoneCode: (payload: string) => void;
  setName: (payload: string) => void;
  setPhoneNumber: (payload: string) => void;
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
}) => {
  return (
    <S.SignUpContent>
      <NameColumn disable={!ruleCheck} setName={setName} />
      <PhoneNumberColumn
        disable={!ruleCheck || isSignUpDataAble(name)}
        setPhoneNumber={setPhoneNumber}
      />
      <VertifyColumn
        disable={!ruleCheck || isSignUpDataAble(name, phoneNumber)}
        setPhoneCode={setPhoneCode}
      />
      <PasswordColumn
        disable={!ruleCheck || isSignUpDataAble(name, phoneNumber, phoneCode)}
        setPassword={setPassword}
      />
    </S.SignUpContent>
  );
};

export default SignUpForm;
