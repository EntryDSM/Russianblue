import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  schoolName: string;
  setIsClickSearchBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SchoolNameColumn: FC<Props> = ({ setIsClickSearchBtn, schoolName }) => {
  const searchBtnClickHandler = () => {
    setIsClickSearchBtn(true);
  };

  return (
    <S.InformationLine width={860}>
      <S.InformationLineTitle>
        <span>*</span>중학교명
      </S.InformationLineTitle>
      <Input
        width={166}
        height={42}
        inputChangeHandler={() => {}}
        name={'schoolName'}
        disable
        value={schoolName}
      />
      <S.SearchBtn onClick={searchBtnClickHandler}>검색</S.SearchBtn>
    </S.InformationLine>
  );
};

export default SchoolNameColumn;
