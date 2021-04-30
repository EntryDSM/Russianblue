import React, { FC } from 'react';
import * as S from './style';
import { InfoGender, InfoBirth, InfoGrade, InfoAddress } from './';
import { EXPLAIN } from './Constance';

interface Props {
  width: number;
  inputWidth?: number;
  title: string;
  isEssential: boolean;
  explain?: boolean;
}

const InfoLine: FC<Props> = ({ width, title, isEssential, inputWidth, explain }) => {
  return (
    <S.InfoLine width={width}>
      <S.SubTitle>
        {isEssential && <S.Essential>*</S.Essential>}
        {!isEssential && <S.Space />}
        {title}
      </S.SubTitle>
      {inputWidth && <S.InfoInput width={inputWidth} />}
      {title === '중학교명' && <S.SearchBtn>검색</S.SearchBtn>}
      {title === '성별' && <InfoGender gender={['남자', '여자']} />}
      {title === '생년월일' && <InfoBirth />}
      {title === '학번' && <InfoGrade title={['학년', '반', '번호']} />}
      {title === '주소' && <InfoAddress />}
      {title === '검정고시 총점' && <S.Score>점</S.Score>}
      {explain && (
        <S.Explain>
          <span>*</span>
          {EXPLAIN}
        </S.Explain>
      )}
    </S.InfoLine>
  );
};

export default InfoLine;
