import React, { ChangeEvent, FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  setInput: (payload: { name: string; value: string }) => void;
}

const SchoolNameColumn: FC<Props> = ({ setInput }) => {
  const schoolNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
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
      />
      <S.SearchBtn>검색</S.SearchBtn>
    </S.InformationLine>
  );
};

export default SchoolNameColumn;
