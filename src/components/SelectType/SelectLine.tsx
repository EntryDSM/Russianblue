import React from 'react';
import * as S from './style';
import {
  ChooseType,
  ChooseRegion,
  ChooseGraduation,
  ChooseGraduationDate,
  ChooseRemark,
} from './column';

const SelectLine = () => {
  return (
    <S.SelectLine>
      <ChooseType />
      <ChooseRegion />
      <ChooseGraduation />
      <ChooseGraduationDate />
      <ChooseRemark />
    </S.SelectLine>
  );
};

export default SelectLine;
