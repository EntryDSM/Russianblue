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
}) => {
  const [isProspective, setIsProspective] = useState(false);
  return (
    <S.SelectLine>
      <ChooseType
        socialType={socialType}
        setType={setType}
        setSocialType={setSocialType}
        applicationType={applicationType}
        applicationRemark={applicationRemark}
        setRemark={setRemark}
      />
      <ChooseRegion setArea={setArea} isDaejeon={isDaejeon} />
      <ChooseGraduation
        setGraduation={setGraduation}
        setIsProspective={setIsProspective}
        educationalStatus={educationalStatus}
      />
      <ChooseGraduationDate
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
        setRemark={setRemark}
        applicationRemark={applicationRemark}
        applicationType={applicationType}
      />
    </S.SelectLine>
  );
};

export default SelectLine;
