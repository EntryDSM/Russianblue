import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { REMARKS, REMARK_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  setRemark: (payload: string) => void;
  application_remark: string;
  application_type: string;
  is_daejeon: boolean;
  educational_status: string;
  graduationYear: number;
  graduationMonth: number;
  autoSaveSelectType: (payload: {
    educational_status: string;
    application_type: string;
    is_daejeon: boolean;
    application_remark: string;
    graduated_at: string;
  }) => void;
}

const ChooseRemark: FC<Props> = ({
  setRemark,
  application_remark,
  educational_status,
  application_type,
  is_daejeon,
  graduationYear,
  graduationMonth,
  autoSaveSelectType,
}) => {
  const [isCheck, setIsCheck] = useState({ nationalMerit: false, specialAdmission: false });

  useEffect(() => {
    switch (application_remark) {
      case 'PRIVILEGED_ADMISSION':
        setIsCheck({ nationalMerit: false, specialAdmission: true });
        break;
      case 'NATIONAL_MERIT':
        setIsCheck({ nationalMerit: true, specialAdmission: false });
        break;
      default:
        setIsCheck({ nationalMerit: false, specialAdmission: false });
    }
  }, [application_remark]);

  useEffect(() => {
    let graduatedAt = '';
    if (String(graduationMonth).length === 1) {
      graduatedAt = String(graduationYear) + '0' + String(graduationMonth);
    } else graduatedAt = String(graduationYear) + String(graduationMonth);
    autoSaveSelectType({
      educational_status: educational_status,
      application_type: application_type,
      is_daejeon: is_daejeon,
      application_remark: application_remark,
      graduated_at: graduatedAt,
    });
  }, [application_remark]);

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'nationalMerit':
        setIsCheck({ nationalMerit: !isCheck.nationalMerit, specialAdmission: false });
        if (!isCheck.nationalMerit) {
          setRemark('NATIONAL_MERIT');
        } else setRemark(null);
        break;
      case 'specialAdmission':
        setIsCheck({ nationalMerit: false, specialAdmission: !isCheck.specialAdmission });
        if (!isCheck.specialAdmission) {
          setRemark('PRIVILEGED_ADMISSION');
        } else setRemark(null);
        break;
    }
  };
  return (
    <S.Line>
      <S.LineTitle>
        <span />
        특기사항
      </S.LineTitle>
      {REMARKS.map(data => {
        return (
          <S.SelectBox margin={65} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle data-id={data.id} onClick={onCheckBtnClick} />}
            </S.CheckCircle>
            <p>{data.content}</p>
          </S.SelectBox>
        );
      })}
      <S.Explain>
        <span>*</span>
        {REMARK_EXPLAIN}
      </S.Explain>
    </S.Line>
  );
};

export default ChooseRemark;
