import React, { FC, useEffect, useMemo } from 'react';
import * as S from './style';
import { SCHOOL, SELECTTYPE } from '../../constance/SelectType';
import Pagination from '../default/Pagination';
import SelectLine from './SelectLine';

interface Props {
  application_type: string;
  socialType: string;
  is_daejeon: boolean;
  educational_status: string;
  graduated_at: string;
  graduationMonth: number;
  graduationYear: number;
  application_remark: string;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: boolean) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
  selectType: (payload: {
    educational_status: string;
    application_type: string;
    is_daejeon: boolean;
    application_remark: string;
    graduated_at: string;
  }) => void;
  autoSaveSelectType: (payload: {
    educational_status: string;
    application_type: string;
    is_daejeon: boolean;
    application_remark: string;
    graduated_at: string;
  }) => void;
}

const SelectType: FC<Props> = ({
  application_type,
  socialType,
  is_daejeon,
  educational_status,
  graduated_at,
  graduationMonth,
  graduationYear,
  application_remark,
  setType,
  setSocialType,
  setArea,
  autoSaveSelectType,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
}) => {
  const pagination = useMemo(() => {
    if (
      application_type &&
      is_daejeon !== undefined &&
      educational_status &&
      graduationYear &&
      graduationMonth
    ) {
      return <Pagination prevPagePath={'/'} nextPagePath={'/information'} isNextPage />;
    } else {
      return <Pagination prevPagePath={'/'} />;
    }
  }, [application_type, is_daejeon, educational_status, graduationYear, graduationMonth]);

  return (
    <S.SelectType>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{SELECTTYPE}</S.Title>
      </div>
      <SelectLine
        application_type={application_type}
        is_daejeon={is_daejeon}
        educational_status={educational_status}
        graduationMonth={graduationMonth}
        graduationYear={graduationYear}
        application_remark={application_remark}
        socialType={socialType}
        graduated_at={graduated_at}
        setType={setType}
        setSocialType={setSocialType}
        setArea={setArea}
        setGraduation={setGraduation}
        setGraduationMonth={setGraduationMonth}
        setGraduationYear={setGraduationYear}
        setRemark={setRemark}
        autoSaveSelectType={autoSaveSelectType}
      />
      {pagination}
    </S.SelectType>
  );
};

export default SelectType;
