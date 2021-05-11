import React, { FC } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active, dropdown_disabled } from '../../../assets/selectType';
import { SOCIAL } from '../../../constance/SelectType';

interface Props {
  disabled: number;
}

const TypeSelect: FC<Props> = ({ disabled }) => {
  return (
    <S.Select width={167} disabled={disabled}>
      <S.SelectContent width={135}>
        <p>사회통합전형</p>
        {disabled === 0 && <img src={dropdown_disabled} />}
        {disabled === 1 && <img src={dropdown} />}
        {disabled === 2 && <img src={dropdown_active} />}
      </S.SelectContent>
      <S.SubSelect>
        <S.GrayLine width={135} />
        {SOCIAL.map(data => {
          return <p>{data.content}</p>;
        })}
      </S.SubSelect>
    </S.Select>
  );
};

export default TypeSelect;
