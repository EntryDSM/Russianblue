import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  goNext: () => void;
}

const EndModal: FC<Props> = ({ goNext }) => {
  return (
    <S.ModalMain>
      <S.ModalTitle bottom={4}>비밀번호 재설정</S.ModalTitle>
      <S.ModalSubTitle>비밀번호 재설정이 완료되었습니다</S.ModalSubTitle>
      <S.ModalResetPasswordSuccessImage />
      <S.ModalDefaultButtonWrapper>
        <S.ModalDefaultButton onClick={goNext}>확인</S.ModalDefaultButton>
      </S.ModalDefaultButtonWrapper>
    </S.ModalMain>
  );
};

export default EndModal;
