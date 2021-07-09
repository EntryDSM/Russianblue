import Input from '../../default/input';
import React, { FC, useEffect } from 'react';
import * as S from '../style';
import MoveButton from './moveButton';
import useResetPassword from '../../../util/hooks/resetPassword/useResetPassword';
import { isHaveError } from '../../../util/util/format';

interface Props {
  goNext: () => void;
}

const SetPhoneNumberModal: FC<Props> = ({ goNext }) => {
  const { state, setState } = useResetPassword();
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setVertifyPhoneNumber(e.target.value);
  };
  const sendVertifyCodeButtonClickHandler = () => {
    const { vertifyPhoneNumber } = state;
    setState.sendVertifyCode({ email: state.vertifyPhoneNumber });
  };

  useEffect(() => {
    setState.setResetPasswordError({ status: 0, message: '', type: '' });
    return () => {
      setState.resetState();
    };
  }, []);

  return (
    <S.ModalMain>
      <S.ModalTitle>비밀번호 재설정</S.ModalTitle>
      {isHaveError(state.error.message) ? (
        <S.ModalErrorText>유저가 없습니다.</S.ModalErrorText>
      ) : (
        <S.ModalSubTitle>본인인증시 사용했던 이메일을 입력해주세요</S.ModalSubTitle>
      )}
      <Input
        inputChangeHandler={phoneNumberChangeHandler}
        width={280}
        height={48}
        margin='0px 0px 15px 0px'
        placeholder='이메일'
      />
      <S.ModalDefaultButtonWrapper>
        <S.ModalDefaultButton onClick={sendVertifyCodeButtonClickHandler}>
          인증번호 전송
        </S.ModalDefaultButton>
      </S.ModalDefaultButtonWrapper>
      <S.ModalMoveButtonWrapper>
        <div />
        <MoveButton
          text='다음'
          type='next'
          buttonClickHandler={goNext}
          disable={!state.vertifyCodeSend}
        />
      </S.ModalMoveButtonWrapper>
    </S.ModalMain>
  );
};

export default SetPhoneNumberModal;
