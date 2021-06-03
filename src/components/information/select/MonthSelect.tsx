import React, { FC, useMemo, useState } from 'react';
import { dropdown, dropdown_active } from '../../../assets/selectType';
import * as S from '../style';

interface Props {
  birthMonth: number;
  setBirthMonth: (payload: number) => void;
}

const MonthSelect: FC<Props> = ({ birthMonth, setBirthMonth }) => {
  const [active, setActive] = useState(false);
  const monthArray = [...Array(12)].map((_, i) => i + 1);

  const selectClickHandler = () => {
    setActive(!active);
  };

  const birthMonthClickHandler = e => {
    setBirthMonth(e.target.innerText);
  };

  const activeImg = useMemo(() => {
    if (active) return <img src={dropdown_active} />;
    else return <img src={dropdown} />;
  }, [active]);

  return (
    <S.Select width={83} onClick={selectClickHandler}>
      <S.SelectContent width={52}>
        <p>{birthMonth}</p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {monthArray.map(month => {
            return <p onClick={birthMonthClickHandler}>{month}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
