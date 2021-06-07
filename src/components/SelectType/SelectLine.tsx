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
  socialType: string;
  graduationMonth: number;
  graduationYear: number;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: string) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
}

const SelectLine: FC<Props> = ({
  socialType,
  graduationMonth,
  graduationYear,
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
      <ChooseType socialType={socialType} setType={setType} setSocialType={setSocialType} />
      <ChooseRegion setArea={setArea} />
      <ChooseGraduation setGraduation={setGraduation} setIsProspective={setIsProspective} />
      <ChooseGraduationDate
        graduationMonth={graduationMonth}
        graduationYear={graduationYear}
        setGraduationMonth={setGraduationMonth}
        setGraduationYear={setGraduationYear}
        isProspective={isProspective}
      />
      <ChooseRemark setRemark={setRemark} />
    </S.SelectLine>
  );
};

export default SelectLine;
