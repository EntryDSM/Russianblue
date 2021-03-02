import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  goNext: () => void;
}

const FileErrorModal: FC<Props> = ({ goNext }) => {
  return (
    <S.ModalMain>
      <S.ModalTitle bottom={10}>정말 제출하시겠습니까?</S.ModalTitle>
      <S.ModalSubTitle>제출하면 다시 수정할 수 없으니 다시 한번 확인해 주세요</S.ModalSubTitle>
      <S.ModalSubmitImage />
      <S.ModalDefaultButtonWrapper>
        <S.ModalDefaultButton onClick={goNext}>제출</S.ModalDefaultButton>
      </S.ModalDefaultButtonWrapper>
    </S.ModalMain>
  );
};

export default FileErrorModal;
