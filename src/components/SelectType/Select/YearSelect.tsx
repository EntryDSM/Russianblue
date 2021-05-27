import React, { FC, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  disabled: number;
  graduation_year: number;
  setGraduationYear: (payload: number) => void;
}

const YearSelect: FC<Props> = ({ disabled, graduation_year, setGraduationYear }) => {
  const [active, setActive] = useState(1);

  const onSelectClick = () => {
    if (disabled === 1) {
      if (active === 1) {
        setActive(2);
      } else {
        setActive(1);
      }
    }
  };

  const onGraduationYearClick = e => {
    setGraduationYear(e.target.innerText);
  };

  return (
    <S.Select width={112} disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent width={80}>
        <p>{graduation_year}</p>
        {active === 1 && <img src={dropdown} />}
        {active === 2 && <img src={dropdown_active} />}
      </S.SelectContent>
      {disabled === 1 && active === 2 && (
        <S.SubSelect>
          <S.GrayLine width={80} />
          {Array(10)
            .fill(1)
            .map((e, i) => {
              return <p onClick={onGraduationYearClick}>{i + 2016}</p>;
            })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default YearSelect;
