import React, { FC, useMemo, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  birthYear: number;
  setBirthYear: (payload: number) => void;
}

const YearSelect: FC<Props> = ({ birthYear, setBirthYear }) => {
  const [active, setActive] = useState(false);
  const yearArray = [...Array(20)].map((_, i) => 2022 - i);

  const selectClickHandler = () => {
    setActive(!active);
  };

  const birthYearClickHandler = e => {
    setBirthYear(e.target.innerText);
  };

  const activeImg = useMemo(() => {
    if (active) return <img src={dropdown_active} />;
    else return <img src={dropdown} />;
  }, [active]);

  return (
    <S.Select width={114} onClick={selectClickHandler}>
      <S.SelectContent width={82}>
        <p>{birthYear}</p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={82} />
          {yearArray.map(year => {
            return <p onClick={birthYearClickHandler}>{year}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default YearSelect;
