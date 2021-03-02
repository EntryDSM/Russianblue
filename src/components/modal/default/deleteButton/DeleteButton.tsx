import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  setType: (type: string) => void;
}

const DeleteButton: FC<Props> = ({ setType }) => {
  const buttonClickHandler = () => {
    setType('');
  };
  return (
    <S.ModalDeleteButtonWrapper>
      <S.ModalDeleteButton onClick={buttonClickHandler}>
        <div />
        <div />
      </S.ModalDeleteButton>
    </S.ModalDeleteButtonWrapper>
  );
};

export default DeleteButton;
