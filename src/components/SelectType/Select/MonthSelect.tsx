import React, { FC } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  active: number;
}

const MonthSelect: FC<Props> = ({ active }) => {
  return (
    <S.Select width={105} disabled={active}>
      <S.SelectContent width={74}>
        <p>12</p>
        {active === 1 && <img src={dropdown} />}
        {active === 2 && <img src={dropdown_active} />}
      </S.SelectContent>
    </S.Select>
  );
};

export default MonthSelect;
