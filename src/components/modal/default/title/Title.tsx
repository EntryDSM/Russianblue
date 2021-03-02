import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  top?: number;
  bottom?: number;
}

const Title: FC<Props> = ({ children, top, bottom }) => {
  return (
    <S.ModalTitle top={top} bottom={bottom}>
      {children}
    </S.ModalTitle>
  );
};

export default Title;
