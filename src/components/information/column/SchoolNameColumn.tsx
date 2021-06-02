import React, { ChangeEvent } from 'react';
import * as S from '../style';
import Input from '../../default/input';

const SchoolNameColumn = () => {
  const schoolNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {};

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
      />
      <S.SearchBtn>검색</S.SearchBtn>
    </S.InformationLine>
  );
};

export default SchoolNameColumn;
