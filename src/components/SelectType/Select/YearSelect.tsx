import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  disabled: string;
  graduationYear: number;
  setGraduationYear: (payload: number) => void;
  graduationMonth: number;
  autoSaveSelectType: (payload: {
    educational_status: string;
    application_type: string;
    is_daejeon: boolean;
    application_remark: string;
    graduated_at: string;
  }) => void;
  educational_status: string;
  application_remark: string;
  application_type: string;
  is_daejeon: boolean;
}

const YearSelect: FC<Props> = ({
  disabled,
  graduationYear,
  setGraduationYear,
  graduationMonth,
  educational_status,
  application_remark,
  application_type,
  is_daejeon,
  autoSaveSelectType,
}) => {
  const [active, setActive] = useState(false);
  const YearArray = [...Array(10)].map((_, i) => i + 2016);

  useEffect(() => {
    if (disabled === 'block') {
      setGraduationYear(2022);
    }
    let graduatedAt = '';
    if (String(graduationMonth).length === 1) {
      graduatedAt = '20220' + String(graduationMonth);
    } else graduatedAt = '2022' + String(graduationMonth);
    autoSaveSelectType({
      educational_status: educational_status,
      application_type: application_type,
      is_daejeon: is_daejeon,
      application_remark: application_remark,
      graduated_at: graduatedAt,
    });
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
    let graduatedAt = '';
    if (String(graduationMonth).length === 1) {
      graduatedAt = String(year) + '0' + String(graduationMonth);
    } else graduatedAt = String(year) + String(graduationMonth);
    autoSaveSelectType({
      educational_status: educational_status,
      application_type: application_type,
      is_daejeon: is_daejeon,
      application_remark: application_remark,
      graduated_at: graduatedAt,
    });
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
