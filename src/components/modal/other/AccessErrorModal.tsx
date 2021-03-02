import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  goNext: () => void;
}

const AccessErrorModal: FC<Props> = ({ goNext }) => {
  return (
    <S.ModalMain>
      <S.ModalTitle bottom={10}>접근 오류</S.ModalTitle>
      <S.ModalSubTitle>기간을 다시 한번 확인해 주세요</S.ModalSubTitle>
      <S.ModalAccessErrorImage />
      <S.ModalDefaultButtonWrapper>
        <S.ModalDefaultButton onClick={goNext}>확인</S.ModalDefaultButton>
      </S.ModalDefaultButtonWrapper>
    </S.ModalMain>
  );
};

export default AccessErrorModal;
