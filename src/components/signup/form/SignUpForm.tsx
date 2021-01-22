import React, { FC } from 'react';
import * as S from '../style';
import { NameColumn, PhoneNumberColumn, VertifyColumn, PasswordColumn } from './column';

const SignUpForm: FC = () => {
  return (
    <S.SignUpContent>
      <NameColumn disable={false} />
      <PhoneNumberColumn disable={false} />
      <VertifyColumn disable={true} />
      <PasswordColumn disable={false} />
    </S.SignUpContent>
  );
};

export default SignUpForm;
