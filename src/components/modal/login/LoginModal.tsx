import React, { FC } from 'react';
import * as S from '../style';
import DefaultButton from '../default/defaultButton';
import Title from '../default/title/Title';
import Input, { PasswordInput } from '../../default/input';
import { useSignIn } from '../../../util/hooks/signin';

const LoginModal: FC = () => {
  const { state, setState } = useSignIn();
  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setId(e.target.value);
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setPassword(e.target.value);
  };
  return (
    <S.ModalMain>
      <Title>로그인</Title>
      <S.ModalErrorText>asdf</S.ModalErrorText>
      <Input
        inputChangeHandler={idChangeHandler}
        width={280}
        height={48}
        margin='0px 0px 15px 0px'
        placeholder='전화번호'
        type='number'
      />
      <PasswordInput
        inputChangeHandler={passwordChangeHandler}
        width={280}
        height={48}
        margin='0px 0px 30px 0px'
        placeholder='비밀번호'
      />
      <S.ModalDefaultButtonWrapper>
        <DefaultButton text='로그인' buttonClickHandler={() => {}} />
      </S.ModalDefaultButtonWrapper>
      <S.ModalSubButton>아직 계정이 없으신가요?</S.ModalSubButton>
      <S.ModalSubButton>비밀번호 재설정</S.ModalSubButton>
    </S.ModalMain>
  );
};

export default LoginModal;
