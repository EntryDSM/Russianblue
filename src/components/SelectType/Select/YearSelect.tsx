import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  disabled: string;
  graduationYear: number;
  setGraduationYear: (payload: number) => void;
  graduationMonth: number;
  autoSaveSelectType: (payload: {
    educationalStatus: string;
    applicationType: string;
    isDaejeon: boolean;
    applicationRemark: string;
    graduatedAt: string;
  }) => void;
  educationalStatus: string;
  applicationRemark: string;
  applicationType: string;
  isDaejeon: boolean;
}

const YearSelect: FC<Props> = ({
  disabled,
  graduationYear,
  setGraduationYear,
  graduationMonth,
  educationalStatus,
  applicationRemark,
  applicationType,
  isDaejeon,
  autoSaveSelectType,
}) => {
  const [active, setActive] = useState(false);
  const YearArray = [...Array(10)].map((_, i) => i + 2016);

  useEffect(() => {
    if (disabled === 'block') {
      setGraduationYear(2022);
    }
    let graduatedDate = '';
    if (String(graduationMonth).length === 1) {
      graduatedDate = '20220' + String(graduationMonth);
    } else graduatedDate = '2022' + String(graduationMonth);
    autoSaveSelectType({
      educationalStatus: educationalStatus,
      applicationType: applicationType,
      isDaejeon: isDaejeon,
      applicationRemark: applicationRemark,
      graduatedAt: graduatedDate,
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
    let graduatedDate = '';
    if (String(graduationMonth).length === 1) {
      graduatedDate = String(year) + '0' + String(graduationMonth);
    } else graduatedDate = String(year) + String(graduationMonth);
    autoSaveSelectType({
      educationalStatus: educationalStatus,
      applicationType: applicationType,
      isDaejeon: isDaejeon,
      applicationRemark: applicationRemark,
      graduatedAt: graduatedDate,
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
