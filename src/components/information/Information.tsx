import React, { FC } from 'react';
import * as S from './style';
import Pagination from '../default/Pagination';
import InformationForm from './InformationForm';
import { SCHOOL, INFORMATIONTITLE } from '../../constance/information';
import { informationType } from '../../constance/information';

interface Props {
  name: string;
  gender: string;
  birthDay: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolName: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  zipCode: string;
  fullAddress: string;
  baseAddress: string;
  detailAddress: string;
  grade: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  imageFile: File;
  isGraduated: boolean;
  imageUrl: string;
  setInput: (payload: { name: string; value: string }) => void;
  setGender: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
  setImageUrl: (payload: string) => void;
  setImageFile: (payload: File) => void;
  informationImage: (payload: File) => void;
  information: (payload: informationType) => void;
  autoSaveInformation: (payload: informationType) => void;
}

const Information: FC<Props> = ({
  name,
  gender,
  birthDay,
  birthYear,
  birthMonth,
  birthDate,
  schoolName,
  schoolPhoneNumber,
  parentName,
  parentPhoneNumber,
  phoneNumber,
  homePhoneNumber,
  zipCode,
  baseAddress,
  detailAddress,
  grade,
  stdGrade,
  stdClass,
  stdNumber,
  imageFile,
  imageUrl,
  isGraduated,
  setInput,
  setGender,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setImageFile,
  setImageUrl,
  informationImage,
  information,
  autoSaveInformation,
}) => {
  return (
    <S.Information>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{INFORMATIONTITLE}</S.Title>
      </div>
      <InformationForm
        name={name}
        gender={gender}
        birthDay={birthDay}
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        schoolName={schoolName}
        schoolPhoneNumber={schoolPhoneNumber}
        parentName={parentName}
        parentPhoneNumber={parentPhoneNumber}
        phoneNumber={phoneNumber}
        homePhoneNumber={homePhoneNumber}
        zipCode={zipCode}
        baseAddress={baseAddress}
        detailAddress={detailAddress}
        grade={grade}
        stdGrade={stdGrade}
        stdClass={stdClass}
        stdNumber={stdNumber}
        imageFile={imageFile}
        isGraduated={isGraduated}
        imageUrl={imageUrl}
        setInput={setInput}
        setGender={setGender}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDate={setBirthDate}
        setImageUrl={setImageUrl}
        setImageFile={setImageFile}
        informationImage={informationImage}
        information={information}
        autoSaveInformation={autoSaveInformation}
      />
      <Pagination />
    </S.Information>
  );
};

export default Information;
