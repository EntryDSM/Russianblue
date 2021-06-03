import React, { FC, useState } from 'react';
import * as S from '../style';
import { GENDER } from '../../../constance/information';

interface Props {
  setGender: (payload: string) => void;
}

const GenderColumn: FC<Props> = ({ setGender }) => {
  const [isCheck, setIsCheck] = useState({ male: false, female: false });
  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    if (dataId === 'male') {
      setIsCheck({ male: true, female: false });
      setGender('남자');
    } else {
      setIsCheck({ male: false, female: true });
      setGender('여자');
    }
  };
  return (
    <S.InformationLine width={860}>
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
