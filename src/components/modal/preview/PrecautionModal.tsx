import React, { FC } from 'react';
import * as S from './style';

interface Props {
  setIsOpenPrecautionMoal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrecautionModal: FC<Props> = ({ setIsOpenPrecautionMoal }) => {
  const accessBtnClickHandler = () => {
    setIsOpenPrecautionMoal(false);
  };

  return (
    <S.ModalWrapper>
      <S.PrecautionModalMain>
        <S.ModalTitle>주의사항</S.ModalTitle>
        <S.ModalExplainBox>
          <S.ModalExplain>
            수험번호는 표기되지 않으며 <span>접수 번호</span>를
          </S.ModalExplain>
          <S.ModalExplain>확인하시기 바랍니다.</S.ModalExplain>
        </S.ModalExplainBox>
        <S.ModalExplainBox>
          <S.ModalExplain>
            <span>서명, 날짜, 체크항목</span> 등은 수기로 작성해 주시기 바랍니다.
          </S.ModalExplain>
        </S.ModalExplainBox>
        <S.AccessBtn onClick={accessBtnClickHandler}>확인</S.AccessBtn>
      </S.PrecautionModalMain>
    </S.ModalWrapper>
  );
};

export default PrecautionModal;
