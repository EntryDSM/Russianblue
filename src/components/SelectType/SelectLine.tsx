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
}

const SelectLine: FC<Props> = ({
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
        application_type={application_type}
        application_remark={application_remark}
        setRemark={setRemark}
      />
      <ChooseRegion setArea={setArea} is_daejeon={is_daejeon} />
      <ChooseGraduation
        setGraduation={setGraduation}
        setIsProspective={setIsProspective}
        educational_status={educational_status}
      />
      <ChooseGraduationDate
        graduated_at={graduated_at}
        educational_status={educational_status}
        graduationMonth={graduationMonth}
        graduationYear={graduationYear}
        setGraduationMonth={setGraduationMonth}
        setGraduationYear={setGraduationYear}
        isProspective={isProspective}
      />
      <ChooseRemark setRemark={setRemark} application_remark={application_remark} />
    </S.SelectLine>
  );
};

export default SelectLine;
