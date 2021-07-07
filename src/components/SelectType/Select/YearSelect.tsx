import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  disabled: string;
  graduationYear: number;
  setGraduationYear: (payload: number) => void;
}

const YearSelect: FC<Props> = ({ disabled, graduationYear, setGraduationYear }) => {
  const [active, setActive] = useState(false);
  const YearArray = [...Array(10)].map((_, i) => i + 2016);

  useEffect(() => {
    if (disabled === 'block') {
      setGraduationYear(2022);
    }
  }, [disabled]);

  const onSelectClick = () => {
    if (disabled === 'normal') {
      if (active === true) {
        setActive(false);
      } else {
        setActive(true);
      }
    }
  };

  const onGraduationYearClick = e => {
    const year = e.target.innerText;
    setGraduationYear(year);
  };

  const activeImg = useMemo(() => {
    if (active) return <img src={dropdown_active} />;
    else return <img src={dropdown} />;
  }, [active]);

  return (
    <S.Select width={112} disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent width={80}>
        <p>{graduationYear}</p>
        {activeImg}
      </S.SelectContent>
      {disabled === 'normal' && active && (
        <S.SubSelect>
          <S.GrayLine width={80} />
          {YearArray.map((_, i) => {
            return <p onClick={onGraduationYearClick}>{i + 2016}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default YearSelect;
