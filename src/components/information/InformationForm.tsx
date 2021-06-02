import React from 'react';
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

const InformationForm = () => {
  return (
    <S.InformationForm>
      <NameColumn title={'이름'} width={860} name={'name'} />
      <PictureBtn />
      <GenderColumn />
      <BirthDateColumn />
      <GradeColumn />
      <SchoolNameColumn />
      <NameColumn title={'보호자명'} width={1220} name={'parentName'} />
      <PhoneNumberColumn title={'학교 연락처'} name={'schoolPhoneNumber'} />
      <PhoneNumberColumn title={'보호자 연락처'} name={'parentPhoneNumber'} />
      <PhoneNumberColumn title={'본인 연락처'} name={'phoneNumber'} />
      <PhoneNumberColumn title={'자택 연락처'} name={'homePhoneNumber'} />
      <AddressColumn />
    </S.InformationForm>
  );
};

export default InformationForm;
