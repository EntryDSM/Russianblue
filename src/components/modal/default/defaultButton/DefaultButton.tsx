import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  text: string;
  buttonClickHandler: () => void;
}

const DefaultButton: FC<Props> = ({ text, buttonClickHandler }) => {
  return <S.ModalDefaultButton onClick={buttonClickHandler}>{text}</S.ModalDefaultButton>;
};

export default DefaultButton;
