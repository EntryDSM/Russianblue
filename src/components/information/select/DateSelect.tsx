import React, { useMemo, useState } from 'react';
import { dropdown, dropdown_active } from '../../..//assets/selectType';
import * as S from '../style';

const DateSelect = () => {
  const [active, setActive] = useState(false);
  const dateArray = [...Array(30)].map((_, i) => i + 1);

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
          {dateArray.map(date => {
            return <p>{date}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default DateSelect;
