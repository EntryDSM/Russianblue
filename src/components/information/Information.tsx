import React, { FC } from 'react';
import * as S from './style';
import Pagination from '../default/Pagination';
import InformationForm from './InformationForm';
import { SCHOOL, INFORMATIONTITLE } from '../../constance/information';

interface Props {
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  setInput: (payload: { name: string; value: string }) => void;
  setGender: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
}

const Information: FC<Props> = () => {
  return (
    <S.Information>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{INFORMATIONTITLE}</S.Title>
      </div>
      <InformationForm />
      <Pagination nowPage={[false, true, false, false, false]} />
    </S.Information>
  );
};

export default Information;
