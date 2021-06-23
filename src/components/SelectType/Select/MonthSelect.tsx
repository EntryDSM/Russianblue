import React, { FC, useMemo, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  graduationMonth: number;
  setGraduationMonth: (payload: number) => void;
  autoSaveSelectType: (payload: {
    educational_status: string;
    application_type: string;
    is_daejeon: boolean;
    application_remark: string;
    graduated_at: string;
  }) => void;
  educational_status: string;
  graduationYear: number;
  application_remark: string;
  application_type: string;
  is_daejeon: boolean;
}

const MonthSelect: FC<Props> = ({
  educational_status,
  graduationMonth,
  setGraduationMonth,
  graduationYear,
  application_remark,
  application_type,
  is_daejeon,
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
    let graduatedAt = '';
    if (String(month).length === 1) {
      graduatedAt = String(graduationYear) + '0' + String(month);
    } else graduatedAt = String(graduationYear) + String(month);
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
