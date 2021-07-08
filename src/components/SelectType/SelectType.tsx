import React, { FC, useMemo } from 'react';
import * as S from './style';
import { SCHOOL, SELECTTYPE } from '../../constance/SelectType';
import Pagination from '../default/Pagination';
import SelectLine from './SelectLine';
import ToastPopUp from '../default/toastPopUp/ToastPopUp';

interface Props {
  applicationType: string;
  socialType: string;
  isDaejeon: boolean;
  educationalStatus: string;
  graduatedAt: string;
  graduationMonth: number;
  graduationYear: number;
  applicationRemark: string;
  isSuccessSaveSelectType: boolean;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: boolean) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
}

const SelectType: FC<Props> = ({
  applicationType,
  socialType,
  isDaejeon,
  educationalStatus,
  graduatedAt,
  graduationMonth,
  graduationYear,
  applicationRemark,
  isSuccessSaveSelectType,
  setType,
  setSocialType,
  setArea,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
}) => {
  const pagination = useMemo(() => {
    if (
      applicationType &&
      isDaejeon !== undefined &&
      educationalStatus &&
      graduationYear &&
      graduationMonth
    ) {
      if (educationalStatus === 'QUALIFICATION_EXAM')
        return (
          <Pagination prevPagePath={'/'} nextPagePath={'/information'} isNextPage isQualification />
        );
      else return <Pagination prevPagePath={'/'} nextPagePath={'/information'} isNextPage />;
    } else {
      if (educationalStatus === 'QUALIFICATION_EXAM')
        return <Pagination prevPagePath={'/'} isQualification />;
      else return <Pagination prevPagePath={'/'} />;
    }
  }, [applicationType, isDaejeon, educationalStatus, graduationYear, graduationMonth]);

  return (
    <S.SelectType>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{SELECTTYPE}</S.Title>
      </div>
      <SelectLine
        applicationType={applicationType}
        isDaejeon={isDaejeon}
        educationalStatus={educationalStatus}
        graduationMonth={graduationMonth}
        graduationYear={graduationYear}
        applicationRemark={applicationRemark}
        socialType={socialType}
        graduatedAt={graduatedAt}
        setType={setType}
        setSocialType={setSocialType}
        setArea={setArea}
        setGraduation={setGraduation}
        setGraduationMonth={setGraduationMonth}
        setGraduationYear={setGraduationYear}
        setRemark={setRemark}
      />
      {pagination}
      <ToastPopUp isSuccessSave={isSuccessSaveSelectType} />
    </S.SelectType>
  );
};

export default SelectType;
