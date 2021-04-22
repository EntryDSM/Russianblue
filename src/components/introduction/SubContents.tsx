import React, { FC } from 'react';
import * as S from './style';

interface Props {
  subTitle: string;
  explain: string;
}

const SubContent: FC<Props> = ({ subTitle, explain }) => {
  return (
    <S.SubContent>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.Explain>
        <span> </span>
        {explain}
      </S.Explain>
      <S.TextBox />
    </S.SubContent>
  );
};

export default SubContent;
