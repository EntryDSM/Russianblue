import { PasswordInput } from '../../default/input';
import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import MoveButton from './moveButton';
import useResetPassword from '../../../util/hooks/resetPassword/useResetPassword';
import { isPassword } from '../../../util/util/format';

interface Props {
  goNext: () => void;
  goPrev: () => void;
}

const SetNewPasswordModal: FC<Props> = ({ goNext, goPrev }) => {
  const { state, setState } = useResetPassword();
  const [isNextAble, setIsNextAble] = useState(false);
  const newPasswordInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setNewPassword(e.target.value);
  };
  useEffect(() => {
    if (!isPassword(state.newPassword)) {
      setIsNextAble(false);
      return;
    }
    setIsNextAble(true);
  }, [state.newPassword]);

  useEffect(() => {
    return () => {
      setState.resetState();
    };
  }, []);

  return (
    <S.ModalMain>
      <S.ModalTitle>비밀번호 재설정</S.ModalTitle>
      <S.ModalSubTitle>새로운 비밀번호를 입력해 주세요</S.ModalSubTitle>
      <PasswordInput
        inputChangeHandler={newPasswordInputChangeHandler}
        width={280}
        height={48}
        margin='0px 0px 15px 0px'
        placeholder='새로운 비밀번호'
      />
      <S.ModalSubTitle>영문(대소문자 구분), 숫자 포함 8자리 이상 특수문자 필수</S.ModalSubTitle>
      <S.ModalMoveButtonWrapper>
        <MoveButton text='이전' type='prev' buttonClickHandler={goPrev} />
        <MoveButton text='다음' type='next' buttonClickHandler={goNext} disable={!isNextAble} />
      </S.ModalMoveButtonWrapper>
    </S.ModalMain>
  );
};

export default SetNewPasswordModal;
