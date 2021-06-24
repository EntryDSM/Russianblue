import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { error } from '../../models/error';
import { isOneOfTextEmpty } from '../../util/util';
import SignUpForm from './form';
import SignUpRule from './rule';
import * as S from './style';

interface Props {
  name: string;
  phoneNumber: string;
  phoneCode: string;
  password: string;
  ruleCheck: boolean;
  isCheckVertifyCode: boolean;
  isSendVertifyCode: boolean;
  setPassword: (payload: string) => void;
  setPhoneCode: (payload: string) => void;
  setName: (payload: string) => void;
  setPhoneNumber: (payload: string) => void;
  setRuleCheck: (payload: boolean) => void;
  sendVertifyCode: (payload: string) => void;
  checkVertifyCode: (payload: { phoneNumber: string; code: string }) => void;
  signup: (payload: { phoneNumber: string; password: string; name: string }) => void;
  error: error;
}

const SignUp: FC<Props> = props => {
  const history = useHistory();
  const { name, phoneNumber, phoneCode, password, signup } = props;

  const signupButtonClickHandler = () => {
    signup({ phoneNumber, password, name });
  };
  return (
    <S.SignUp>
      <div>
        <S.SignUpHeaderWrapper>
          <S.SignUpSubTitle>대덕소프트웨어마이스터고등학교</S.SignUpSubTitle>
          <S.SignUpTitle>2022년 지원자 회원가입</S.SignUpTitle>
        </S.SignUpHeaderWrapper>
        <SignUpRule setRuleCheck={props.setRuleCheck} ruleCheck={props.ruleCheck} />
        <SignUpForm {...props} />
        <S.SignUpSubmitButtonWrapper>
          <S.SignUpSubmitButton
            disable={isOneOfTextEmpty(name, phoneNumber, phoneCode, password)}
            onClick={signupButtonClickHandler}
          >
            계정 생성
            <div />
          </S.SignUpSubmitButton>
        </S.SignUpSubmitButtonWrapper>
      </div>
    </S.SignUp>
  );
};

export default SignUp;
