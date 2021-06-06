import React, { FC, useMemo, useState } from 'react';
import { dropdown, dropdown_active } from '../../..//assets/selectType';
import * as S from '../style';

interface Props {
  birthDate: number;
  birthYear: number;
  birthMonth: number;
  setBirthDate: (payload: number) => void;
}

const DateSelect: FC<Props> = ({ birthDate, birthMonth, birthYear, setBirthDate }) => {
  const [active, setActive] = useState(false);
  const getDate = useMemo(() => {
    switch (Number(birthMonth)) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return [...Array(31)].map((_, i) => i + 1);
      case 4:
      case 6:
      case 9:
      case 11:
        return [...Array(30)].map((_, i) => i + 1);
      case 2:
        if (birthYear % 4 === 0) return [...Array(29)].map((_, i) => i + 1);
        return [...Array(28)].map((_, i) => i + 1);
    }
  }, [Number(birthMonth), Number(birthYear)]);

  const selectClickHandler = () => {
    setActive(!active);
  };

  const birthDateClickHandler = e => {
    setBirthDate(e.target.innerText);
  };

  const activeImg = useMemo(() => {
    if (active) return <img src={dropdown_active} />;
    else return <img src={dropdown} />;
  }, [active]);

  const date = useMemo(() => {
    if (active) {
      return (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {getDate.map(date => {
            return <p onClick={birthDateClickHandler}>{date}</p>;
          })}
        </S.SubSelect>
      );
    }
  }, [active, getDate]);

  return (
    <S.Select width={83} onClick={selectClickHandler}>
      <S.SelectContent width={52}>
        <p>{birthDate}</p>
        {activeImg}
      </S.SelectContent>
      {date}
    </S.Select>
  );
};

export default DateSelect;
