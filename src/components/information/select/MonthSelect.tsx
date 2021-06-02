import React, { useMemo, useState } from 'react';
import { dropdown, dropdown_active } from '../../../assets/selectType';
import * as S from '../style';

const MonthSelect = () => {
  const [active, setActive] = useState(false);
  const monthArray = [...Array(12)].map((_, i) => i + 1);

  const selectClickHandler = () => {
    setActive(!active);
  };

  const activeImg = useMemo(() => {
    if (active) return <img src={dropdown_active} />;
    else return <img src={dropdown} />;
  }, [active]);

  return (
    <S.Select width={83} onClick={selectClickHandler}>
      <S.SelectContent width={52}>
        <p>12</p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {monthArray.map(month => {
            return <p>{month}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
