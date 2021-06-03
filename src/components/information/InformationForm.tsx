import React, { FC } from 'react';
import * as S from './style';
import {
  GenderColumn,
  NameColumn,
  PhoneNumberColumn,
  BirthDateColumn,
  GradeColumn,
  SchoolNameColumn,
  AddressColumn,
  PictureBtn,
} from './column';

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

const InformationForm: FC<Props> = ({
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
  return (
    <S.InformationForm>
      <NameColumn title={'이름'} width={860} name={'name'} setInput={setInput} />
      <PictureBtn imageUrl={imageUrl} setImageUrl={setImageUrl} setImageFile={setImageFile}/>
      <GenderColumn setGender={setGender} />
      <BirthDateColumn
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDate={setBirthDate}
      />
      <GradeColumn setInput={setInput} />
      <SchoolNameColumn setInput={setInput} />
      <NameColumn title={'보호자명'} width={1220} name={'parentName'} setInput={setInput} />
      <PhoneNumberColumn title={'학교 연락처'} name={'schoolPhoneNumber'} setInput={setInput} />
      <PhoneNumberColumn title={'보호자 연락처'} name={'parentPhoneNumber'} setInput={setInput} />
      <PhoneNumberColumn title={'본인 연락처'} name={'phoneNumber'} setInput={setInput} />
      <PhoneNumberColumn title={'자택 연락처'} name={'homePhoneNumber'} setInput={setInput} />
      <AddressColumn setInput={setInput} />
    </S.InformationForm>
  );
};

export default InformationForm;
