import React from 'react';
import SignUpForm from './form';
import SignUpRule from './rule';
import * as S from './style';

const SignUp = () => {
  return (
    <S.SignUp>
      <div>
        <S.SignUpHeaderWrapper>
          <S.SignUpSubTitle>대덕소프트웨어마이스터고등학교</S.SignUpSubTitle>
          <S.SignUpTitle>2022년 지원자 회원가입</S.SignUpTitle>
        </S.SignUpHeaderWrapper>
        <SignUpRule />
        <SignUpForm />
        <S.SignUpSubmitButtonWrapper>
          <S.SignUpSubmitButton disable={true}>
            계정 생성
            <div />
          </S.SignUpSubmitButton>
        </S.SignUpSubmitButtonWrapper>
      </div>
    </S.SignUp>
  );
};

export default SignUp;
