import React, { FC, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  graduation_month: number;
  setGraduationMonth: (payload: number) => void;
}

const MonthSelect: FC<Props> = ({ graduation_month, setGraduationMonth }) => {
  const [active, setActive] = useState(1);

  const onSelectClick = () => {
    if (active === 1) {
      setActive(2);
    } else {
      setActive(1);
    }
  };

  const onGraduationMonthClick = e => {
    setGraduationMonth(e.target.innerText);
  };

  return (
    <S.Select width={105} disabled={active} onClick={onSelectClick}>
      <S.SelectContent width={74}>
        <p>{graduation_month}</p>
        {active === 1 && <img src={dropdown} />}
        {active === 2 && <img src={dropdown_active} />}
      </S.SelectContent>
      {active === 2 && (
        <S.SubSelect>
          <S.GrayLine width={74} />
          {Array(12)
            .fill(1)
            .map((e, i) => {
              return <p onClick={onGraduationMonthClick}>{i + 1}</p>;
            })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
