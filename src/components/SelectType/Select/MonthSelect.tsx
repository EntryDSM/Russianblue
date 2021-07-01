import React, { FC, useMemo, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  graduationMonth: number;
  setGraduationMonth: (payload: number) => void;
  autoSaveSelectType: (payload: {
    educationalStatus: string;
    applicationType: string;
    isDaejeon: boolean;
    applicationRemark: string;
    graduatedAt: string;
  }) => void;
  educationalStatus: string;
  graduationYear: number;
  applicationRemark: string;
  applicationType: string;
  isDaejeon: boolean;
}

const MonthSelect: FC<Props> = ({
  educationalStatus,
  graduationMonth,
  setGraduationMonth,
  graduationYear,
  applicationRemark,
  applicationType,
  isDaejeon,
  autoSaveSelectType,
}) => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState('normal');
  const JanuaryToDecember = [...Array(12)].map((_, i) => i + 1);

  const onSelectClick = () => {
    if (active === true) {
      setActive(false);
      setDisabled('normal');
    } else {
      setActive(true);
      setDisabled('enabled');
    }
  };

  const onGraduationMonthClick = e => {
    const month = e.target.innerText;
    setGraduationMonth(month);
    let graduatedDate = '';
    if (String(month).length === 1) {
      graduatedDate = String(graduationYear) + '0' + String(month);
    } else graduatedDate = String(graduationYear) + String(month);
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
    <S.Select width={105} disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent width={74}>
        <p>{graduationMonth}</p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={74} />
          {JanuaryToDecember.map(month => {
            return <p onClick={onGraduationMonthClick}>{month}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
