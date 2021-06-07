import React, { FC, useState } from 'react';
import * as S from '../style';
import { GENDER } from '../../../constance/information';

interface Props {
  width: number;
  setGender: (payload: string) => void;
}

const GenderColumn: FC<Props> = ({ setGender, width }) => {
  const [isCheck, setIsCheck] = useState({ male: false, female: false });
  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    if (dataId === 'male') {
      setGender('남자');
      setIsCheck({ male: true, female: false });
    } else {
      setGender('여자');
      setIsCheck({ male: false, female: true });
    }
  };
  return (
    <S.InformationLine width={width}>
      <S.InformationLineTitle>
        <span>*</span>성별
      </S.InformationLineTitle>
      {GENDER.map(data => {
        return (
          <S.SelectBox key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p>{data.content}</p>
          </S.SelectBox>
        );
      })}
    </S.InformationLine>
  );
};

export default GenderColumn;
