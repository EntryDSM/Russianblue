import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import {
  ChooseType,
  ChooseRegion,
  ChooseGraduation,
  ChooseGraduationDate,
  ChooseRemark,
  HeadCount,
} from './column';

interface Props {
  applicationType: string;
  socialType: string;
  isDaejeon: boolean;
  educationalStatus: string;
  graduatedAt: string;
  graduationMonth: number;
  graduationYear: number;
  headcount: string;
  applicationRemark: string;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: boolean) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
  setHeadCount: (payload: string) => void;
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
  headcount,
  setType,
  setSocialType,
  setArea,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
  setHeadCount,
}) => {
  const [isProspective, setIsProspective] = useState(false);
  const [isHeadCount, setIsHeadCount] = useState<boolean>(false);

  const showHeadCount = useMemo(() => {
    if (applicationRemark === 'PRIVILEGED_ADMISSION') {
      setIsHeadCount(true);
      return <HeadCount headcount={headcount} setHeadCount={setHeadCount} />;
    } else {
      setIsHeadCount(false);
      setHeadCount(null);
    }
  }, [applicationRemark]);

  return (
    <S.SelectLine isHeadCount={isHeadCount}>
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
      {showHeadCount}
    </S.SelectLine>
  );
};

export default SelectLine;
