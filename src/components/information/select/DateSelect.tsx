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
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        if (birthYear % 4 === 0) return 29;
        return 28;
    }
  }, [Number(birthMonth), Number(birthYear)]);
  let dateArray = [...Array(getDate)].map((_, i) => i + 1);

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
          {dateArray.map(date => {
            return <p onClick={birthDateClickHandler}>{date}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default DateSelect;
