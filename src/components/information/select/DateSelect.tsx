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
        return [...Array(31)].map((_, i) => <p onClick={birthDateClickHandler}>{i + 1}</p>);
      case 4:
      case 6:
      case 9:
      case 11:
        return [...Array(30)].map((_, i) => <p onClick={birthDateClickHandler}>{i + 1}</p>);
      case 2:
        if (birthYear % 4 === 0)
          return [...Array(29)].map((_, i) => <p onClick={birthDateClickHandler}>{i + 1}</p>);
        return [...Array(28)].map((_, i) => <p onClick={birthDateClickHandler}>{i + 1}</p>);
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

  return (
    <S.Select width={83} onClick={selectClickHandler}>
      <S.SelectContent width={52}>
        <p>{birthDate}</p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {getDate}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default DateSelect;
