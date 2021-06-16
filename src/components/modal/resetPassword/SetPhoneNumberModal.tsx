import Input from '../../default/input';
import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import MoveButton from './moveButton';
import useResetPassword from '../../../util/hooks/resetPassword/useResetPassword';
import { isHaveError, isPhoneNumber } from '../../../util/util/format';
import { isOneOfTextEmpty } from '../../../util/util';

interface Props {
  goNext: () => void;
}

const SetPhoneNumberModal: FC<Props> = ({ goNext }) => {
  const [isNextAble, setIsNextAble] = useState(false);
  const { state, setState } = useResetPassword();
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setVertifyPhoneNumber(e.target.value);
  };
  const sendVertifyCodeButtonClickHandler = () => {
    const { vertifyPhoneNumber } = state;
    if (!isPhoneNumber(vertifyPhoneNumber)) {
      setState.setResetPasswordError({ status: 400, message: '잘못된 형식의 전화번호 입니다' });
      return;
    }
    setIsNextAble(true);
  };

  useEffect(() => {
    setState.setResetPasswordError({ status: 0, message: '' });
  }, []);

  return (
    <S.ModalMain>
      <S.ModalTitle>비밀번호 재설정</S.ModalTitle>
      {isHaveError(state.error.message) ? (
        <S.ModalErrorText>{state.error.message}</S.ModalErrorText>
      ) : (
        <S.ModalSubTitle>본인인증시 사용했던 전화번호를 입력해주세요</S.ModalSubTitle>
      )}
      <Input
        inputChangeHandler={phoneNumberChangeHandler}
        width={280}
        height={48}
        margin='0px 0px 15px 0px'
        placeholder='전화번호'
        type='number'
      />
      <S.ModalDefaultButtonWrapper>
        <S.ModalDefaultButton onClick={sendVertifyCodeButtonClickHandler}>
          인증번호 전송
        </S.ModalDefaultButton>
      </S.ModalDefaultButtonWrapper>
      <S.ModalMoveButtonWrapper>
        <div />
        <MoveButton text='다음' type='next' buttonClickHandler={goNext} disable={!isNextAble} />
      </S.ModalMoveButtonWrapper>
    </S.ModalMain>
  );
};

export default SetPhoneNumberModal;
