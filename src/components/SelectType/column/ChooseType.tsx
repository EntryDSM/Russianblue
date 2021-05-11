import React, { FC } from 'react';
import * as S from '../style';
import { TypeSelect } from '../Select';
import { CHOOSETYPEINFO } from '../../../constance/SelectType';

interface Props {
  isChecked?: boolean;
}

const ChooseType: FC<Props> = () => {
  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>전형 선택
      </S.LineTitle>
      {CHOOSETYPEINFO.map(data => {
        return (
          <S.SelectBox margin={86} key={data.id}>
            <S.CheckCircle>
              <S.CheckedCircle />
            </S.CheckCircle>
            <p>{data.content}</p>
          </S.SelectBox>
        );
      })}
      <S.SelectBox margin={86}>
        <S.CheckCircle>
          <S.CheckedCircle />
        </S.CheckCircle>
        <TypeSelect disabled={1} />
      </S.SelectBox>
    </S.Line>
  );
};

export default ChooseType;
