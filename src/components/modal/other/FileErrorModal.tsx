import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  goNext: () => void;
}

const FileErrorModal: FC<Props> = ({ goNext }) => {
  return (
    <S.ModalMain>
      <S.ModalTitle bottom={10}>파일 오류</S.ModalTitle>
      <S.ModalSubTitle>파일 형식이 올바른지 다시 한번 확인해 주세요</S.ModalSubTitle>
      <S.ModalFileErrorImage />
      <S.ModalDefaultButtonWrapper>
        <S.ModalDefaultButton onClick={goNext}>확인</S.ModalDefaultButton>
      </S.ModalDefaultButtonWrapper>
    </S.ModalMain>
  );
};

export default FileErrorModal;
