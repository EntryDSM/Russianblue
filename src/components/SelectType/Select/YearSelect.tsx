import React, { FC } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  active: number;
}

const YearSelect: FC<Props> = ({ active }) => {
  return (
    <S.Select width={112} disabled={active}>
      <S.SelectContent width={80}>
        <p>2022</p>
        {active === 1 && <img src={dropdown} />}
        {active === 2 && <img src={dropdown_active} />}
      </S.SelectContent>
    </S.Select>
  );
};

export default YearSelect;
