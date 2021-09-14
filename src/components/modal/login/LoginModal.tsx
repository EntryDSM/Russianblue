import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../style';
import DefaultButton from '../default/defaultButton';
import Title from '../default/title/Title';
import Input, { PasswordInput } from '../../default/input';
import { useSignIn } from '../../../util/hooks/signin';
import { useModal } from '../../../util/hooks/modal';
import { SIGNIN } from '../../../modules/redux/action/signin';

const LoginModal: FC = () => {
  const history = useHistory();
  const { setState, state } = useSignIn();
  const modalState = useModal();

  const signupButtonClickHandler = () => {
    history.push('/signup');
    modalState.setState.setModalOff('loginModal');
  };
  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setId(e.target.value);
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setPassword(e.target.value);
  };
  const resetPasswordButtonClickHandler = () => {
    modalState.setState.setModalOff('loginModal');
    modalState.setState.setModalOn('resetPassword1');
  };

  const loginButtonClickHandler = () => {
    setState.signin({
      email: state.id,
      password: state.password,
    });
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      loginButtonClickHandler();
    }
  };

  useEffect(() => {
    return () => {
      setState.reset();
    };
  }, []);

  return (
    <S.ModalMain>
      <Title>로그인</Title>
      <S.ModalErrorText>
        {state.error.type === SIGNIN ? '로그인 정보를 확인해 주세요.' : ''}
      </S.ModalErrorText>
      <Input
        inputChangeHandler={idChangeHandler}
        width={280}
        height={48}
        margin='0px 0px 15px 0px'
        placeholder='이메일'
        keypressHandler={keyPressHandler}
      />
      <PasswordInput
        inputChangeHandler={passwordChangeHandler}
        width={280}
        height={48}
        margin='0px 0px 30px 0px'
        placeholder='비밀번호'
        keypressHandler={keyPressHandler}
      />
      <S.ModalDefaultButtonWrapper>
        <DefaultButton text='로그인' buttonClickHandler={loginButtonClickHandler} />
      </S.ModalDefaultButtonWrapper>
      <S.ModalSubButton onClick={signupButtonClickHandler}>
        아직 계정이 없으신가요?
      </S.ModalSubButton>
      <S.ModalSubButton onClick={resetPasswordButtonClickHandler}>비밀번호 재설정</S.ModalSubButton>
    </S.ModalMain>
  );
};

export default LoginModal;
