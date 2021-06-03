import React, { FC } from 'react';
import * as S from './style';
import Pagination from '../default/Pagination';
import InformationForm from './InformationForm';
import { SCHOOL, INFORMATIONTITLE } from '../../constance/information';

interface Props {
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  setInput: (payload: { name: string; value: string }) => void;
  setGender: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
}

const Information: FC<Props> = ({
  birthYear,
  birthMonth,
  birthDate,
  setInput,
  setGender,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
}) => {
  return (
    <S.Information>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{INFORMATIONTITLE}</S.Title>
      </div>
      <InformationForm
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        setInput={setInput}
        setGender={setGender}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDate={setBirthDate}
      />
      <Pagination nowPage={[false, true, false, false, false]} />
    </S.Information>
  );
};

export default Information;
