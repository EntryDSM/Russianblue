import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  showSchoolName: string;
  schoolName: string;
  setInput: (payload: { name: string; value: string }) => void;
  setIsClickSearchBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SchoolNameColumn: FC<Props> = ({
  setInput,
  setIsClickSearchBtn,
  showSchoolName,
  schoolName,
}) => {
  const schoolNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

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
        inputChangeHandler={schoolNameChangeHandler}
        name={'schoolName'}
        disable
        defaultValue={schoolName ? schoolName : showSchoolName}
      />
      <S.SearchBtn onClick={searchBtnClickHandler}>검색</S.SearchBtn>
    </S.InformationLine>
  );
};

export default SchoolNameColumn;
