import React, { FC } from 'react';
import * as S from '../style';
import {
  GenderColumn,
  NameColumn,
  PhoneNumberColumn,
  BirthDateColumn,
  AddressColumn,
  PictureBtn,
  TotalScoreColumn,
} from '../column';

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

const QualificationForm: FC<Props> = ({
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
    <S.QualificationForm>
      <NameColumn title={'이름'} width={904} name={'name'} setInput={setInput} />
      <PictureBtn
        width={270}
        height={295}
        paddingTop={85}
        paddingSide={68}
        top={10}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        setImageFile={setImageFile}
      />
      <GenderColumn width={904} setGender={setGender} />
      <BirthDateColumn
        width={904}
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDate={setBirthDate}
      />
      <TotalScoreColumn setInput={setInput} />
      <NameColumn title={'보호자명'} width={1220} name={'parentName'} setInput={setInput} />
      <PhoneNumberColumn title={'보호자 연락처'} name={'parentPhoneNumber'} setInput={setInput} />
      <PhoneNumberColumn title={'본인 연락처'} name={'phoneNumber'} setInput={setInput} />
      <PhoneNumberColumn title={'자택 연락처'} name={'homePhoneNumber'} setInput={setInput} />
      <AddressColumn setInput={setInput} />
    </S.QualificationForm>
  );
};

export default QualificationForm;
