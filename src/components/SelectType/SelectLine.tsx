import React, { FC, useState } from 'react';
import * as S from './style';
import {
  ChooseType,
  ChooseRegion,
  ChooseGraduation,
  ChooseGraduationDate,
  ChooseRemark,
} from './column';

interface Props {
  applicationType: string;
  socialType: string;
  isDaejeon: boolean;
  educationalStatus: string;
  graduatedAt: string;
  graduationMonth: number;
  graduationYear: number;
  applicationRemark: string;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: boolean) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
  autoSaveSelectType: (payload: {
    educationalStatus: string;
    applicationType: string;
    isDaejeon: boolean;
    applicationRemark: string;
    graduatedAt: string;
  }) => void;
}

const SelectLine: FC<Props> = ({
  applicationType,
  socialType,
  isDaejeon,
  educationalStatus,
  graduatedAt,
  graduationMonth,
  graduationYear,
  applicationRemark,
  setType,
  setSocialType,
  setArea,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
  autoSaveSelectType,
}) => {
  const [isProspective, setIsProspective] = useState(false);
  return (
    <S.SelectLine>
      <ChooseType
        autoSaveSelectType={autoSaveSelectType}
        socialType={socialType}
        setType={setType}
        setSocialType={setSocialType}
        applicationType={applicationType}
        applicationRemark={applicationRemark}
        isDaejeon={isDaejeon}
        educationalStatus={educationalStatus}
        graduationYear={graduationYear}
        graduationMonth={graduationMonth}
        setRemark={setRemark}
      />
      <ChooseRegion
        autoSaveSelectType={autoSaveSelectType}
        setArea={setArea}
        isDaejeon={isDaejeon}
        applicationType={applicationType}
        applicationRemark={applicationRemark}
        educationalStatus={educationalStatus}
        graduationYear={graduationYear}
        graduationMonth={graduationMonth}
      />
      <ChooseGraduation
        autoSaveSelectType={autoSaveSelectType}
        setGraduation={setGraduation}
        setIsProspective={setIsProspective}
        educationalStatus={educationalStatus}
        applicationType={applicationType}
        applicationRemark={applicationRemark}
        isDaejeon={isDaejeon}
        graduationYear={graduationYear}
        graduationMonth={graduationMonth}
      />
      <ChooseGraduationDate
        autoSaveSelectType={autoSaveSelectType}
        applicationType={applicationType}
        applicationRemark={applicationRemark}
        isDaejeon={isDaejeon}
        graduatedAt={graduatedAt}
        educationalStatus={educationalStatus}
        graduationMonth={graduationMonth}
        graduationYear={graduationYear}
        setGraduationMonth={setGraduationMonth}
        setGraduationYear={setGraduationYear}
        isProspective={isProspective}
      />
      <ChooseRemark
        autoSaveSelectType={autoSaveSelectType}
        setRemark={setRemark}
        applicationRemark={applicationRemark}
        applicationType={applicationType}
        isDaejeon={isDaejeon}
        educationalStatus={educationalStatus}
        graduationYear={graduationYear}
        graduationMonth={graduationMonth}
      />
    </S.SelectLine>
  );
};

export default SelectLine;
