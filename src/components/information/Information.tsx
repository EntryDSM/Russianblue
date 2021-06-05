import React, { FC } from 'react';
import * as S from './style';
import Pagination from '../default/Pagination';
import InformationForm from './InformationForm';
import QualificationForm from './Qualification';
import { SCHOOL, INFORMATIONTITLE } from '../../constance/information';
import { useSelectType } from '../../util/hooks/selectType';

interface Props {
  imageUrl: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  setInput: (payload: { name: string; value: string }) => void;
  setGender: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
  setImageUrl: (payload: string) => void;
  setImageFile: (payload: File) => void;
}

const Information: FC<Props> = ({
  imageUrl,
  birthYear,
  birthMonth,
  birthDate,
  setInput,
  setGender,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setImageFile,
  setImageUrl,
}) => {
  const { state } = useSelectType();
  return (
    <S.Information>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{INFORMATIONTITLE}</S.Title>
      </div>
      {state.graduation === '검정고시' ? (
        <QualificationForm
          imageUrl={imageUrl}
          birthYear={birthYear}
          birthMonth={birthMonth}
          birthDate={birthDate}
          setInput={setInput}
          setGender={setGender}
          setBirthYear={setBirthYear}
          setBirthMonth={setBirthMonth}
          setBirthDate={setBirthDate}
          setImageUrl={setImageUrl}
          setImageFile={setImageFile}
        />
      ) : (
        <InformationForm
          imageUrl={imageUrl}
          birthYear={birthYear}
          birthMonth={birthMonth}
          birthDate={birthDate}
          setInput={setInput}
          setGender={setGender}
          setBirthYear={setBirthYear}
          setBirthMonth={setBirthMonth}
          setBirthDate={setBirthDate}
          setImageUrl={setImageUrl}
          setImageFile={setImageFile}
        />
      )}
      <Pagination nowPage={[false, true, false, false, false]} />
    </S.Information>
  );
};

export default Information;
