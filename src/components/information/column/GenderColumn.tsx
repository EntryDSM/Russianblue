import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from '../style';
import { GENDER } from '../../../constance/information';

interface Props {
  width: number;
  sex: string;
  setSex: (payload: string) => void;
}

const GenderColumn: FC<Props> = ({ setSex, width, sex }) => {
  const [genderBtnCheck, setGenderBtnCheck] = useState({ male: false, female: false });
  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    if (dataId === 'male') {
      setSex('MALE');
    } else {
      setSex('FEMALE');
    }
  };

  useEffect(() => {
    if (sex === 'MALE') setGenderBtnCheck({ male: true, female: false });
    else if (sex === 'FEMALE') setGenderBtnCheck({ male: false, female: true });
  }, [sex]);

  const showGenderCheck = useMemo(() => {
    return GENDER.map(data => {
      return (
        <S.SelectBox key={data.id}>
          <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
            {genderBtnCheck[data.id] && <S.CheckedCircle />}
          </S.CheckCircle>
          <p>{data.content}</p>
        </S.SelectBox>
      );
    });
  }, [genderBtnCheck]);

  return (
    <S.InformationLine width={width}>
      <S.InformationLineTitle>
        <span>*</span>성별
      </S.InformationLineTitle>
      {showGenderCheck}
    </S.InformationLine>
  );
};

export default GenderColumn;
