import React, { Dispatch, FC, useEffect, useState } from 'react';
import * as S from '../style';
import { GRADUATION } from '../../../constance/SelectType';

interface Props {
  setIsProspective: Dispatch<React.SetStateAction<boolean>>;
  setGraduation: (payload: string) => void;
  educational_status: string;
  application_remark: string;
  application_type: string;
  is_daejeon: boolean;
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

const isCheckInit = {
  prospective: false,
  graduate: false,
  qualification: false,
};

const ChooseGraduation: FC<Props> = ({
  setIsProspective,
  setGraduation,
  educational_status,
  application_remark,
  application_type,
  is_daejeon,
  graduationYear,
  graduationMonth,
  autoSaveSelectType,
}) => {
  const [isCheck, setIsCheck] = useState(isCheckInit);
  useEffect(() => {
    switch (educational_status) {
      case 'PROSPECTIVE_GRADUATE':
        setIsCheck({ ...isCheckInit, prospective: true });
        setIsProspective(true);
        break;
      case 'GRADUATE':
        setIsCheck({ ...isCheckInit, graduate: true });
        setIsProspective(false);
        break;
      case 'QUALIFICATION_EXAM':
        setIsCheck({ ...isCheckInit, qualification: true });
        setIsProspective(false);
        break;
      default:
        setIsCheck(isCheckInit);
        break;
    }
  }, [educational_status]);

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
  }, [educational_status]);

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'prospective':
        setIsCheck({ ...isCheckInit, prospective: true });
        setIsProspective(true);
        setGraduation('PROSPECTIVE_GRADUATE');
        break;
      case 'graduate':
        setIsCheck({ ...isCheckInit, graduate: true });
        setIsProspective(false);
        setGraduation('GRADUATE');
        break;
      case 'qualification':
        setIsCheck({ ...isCheckInit, qualification: true });
        setIsProspective(false);
        setGraduation('QUALIFICATION_EXAM');
        break;
    }
  };

  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>졸업 구분
      </S.LineTitle>
      {GRADUATION.map(data => {
        return (
          <S.SelectBox margin={65} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p>{data.content}</p>
          </S.SelectBox>
        );
      })}
    </S.Line>
  );
};

export default ChooseGraduation;
