import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  text: string;
  buttonClickHandler: () => void;
  type: 'prev' | 'next';
  disable?: boolean;
}

const MoveButton: FC<Props> = ({ text, buttonClickHandler, type, disable }) => {
  return (
    <S.ModalNextButton onClick={disable ? () => {} : buttonClickHandler} disable={disable}>
      {type === 'next' ? (
        <>
          <p>{text}</p>
          <div className={type} />
        </>
      ) : (
        <>
          <div className={type} />
          <p>{text}</p>
        </>
      )}
    </S.ModalNextButton>
  );
};

export default MoveButton;
