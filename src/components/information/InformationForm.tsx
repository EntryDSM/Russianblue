import React, { FC, useMemo } from 'react';
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
  TotalScoreColumn,
} from './column';
import useSelectType from '../../util/hooks/selectType';
import { informationType } from '../../constance/information';

interface Props {
  name: string;
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolCode: string;
  showSchoolName: string;
  schoolName: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  grade: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  imageFile: File;
  imageUrl: string;
  totalScore: number;
  setInput: (payload: { name: string; value: string }) => void;
  setGender: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
  setImageUrl: (payload: string) => void;
  setImageFile: (payload: File) => void;
  informationImage: (payload: File) => void;
  information: (payload: informationType) => void;
  setIsClickSearchBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClickAddressBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const InformationForm: FC<Props> = ({
  name,
  gender,
  birthYear,
  birthMonth,
  birthDate,
  showSchoolName,
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
  totalScore,
  setInput,
  setGender,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setImageFile,
  setImageUrl,
  informationImage,
  setIsClickSearchBtn,
  setIsClickAddressBtn,
}) => {
  const graduation = useSelectType().state.educationalStatus;

  const styleInfo = useMemo(() => {
    if (graduation === 'QUALIFICATION_EXAM')
      return {
        widthHeight: {
          width: 904,
          height: 774,
        },
        picture: {
          width: 270,
          height: 295,
          paddingTop: 85,
          paddingSide: 68,
          top: 10,
        },
      };
    else
      return {
        widthHeight: {
          width: 860,
          height: 935,
        },
        picture: {
          width: 317,
          height: 363,
          paddingTop: 119,
          paddingSide: 91,
          top: 18,
        },
      };
  }, [graduation]);

  const showGrade = useMemo(() => {
    if (graduation === 'QUALIFICATION_EXAM')
      return <TotalScoreColumn setInput={setInput} totalScore={totalScore} />;
    else
      return (
        <>
          <GradeColumn
            setInput={setInput}
            stdGrade={stdGrade}
            stdClass={stdClass}
            stdNumber={stdNumber}
            grade={grade}
          />
          <SchoolNameColumn
            showSchoolName={showSchoolName}
            schoolName={schoolName}
            setIsClickSearchBtn={setIsClickSearchBtn}
            setInput={setInput}
          />
        </>
      );
  }, [setInput, graduation, grade, schoolName]);

  const phoneNumberColumn = useMemo(() => {
    if (graduation !== 'QUALIFICATION_EXAM')
      return (
        <PhoneNumberColumn
          schoolPhoneNumber={schoolPhoneNumber}
          title={'학교 연락처'}
          inputName={'schoolPhoneNumber'}
          setInput={setInput}
        />
      );
  }, [graduation, schoolPhoneNumber]);

  return (
    <S.InformationForm height={styleInfo.widthHeight.height}>
      <NameColumn
        name={name}
        title={'이름'}
        width={styleInfo.widthHeight.width}
        inputName={'name'}
        setInput={setInput}
      />
      <PictureBtn
        {...styleInfo.picture}
        imageFile={imageFile}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        setImageFile={setImageFile}
        informationImage={informationImage}
      />
      <GenderColumn width={styleInfo.widthHeight.width} setGender={setGender} gender={gender} />
      <BirthDateColumn
        width={styleInfo.widthHeight.width}
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDate={setBirthDate}
      />
      {showGrade}
      <NameColumn
        parentName={parentName}
        title={'보호자명'}
        width={1220}
        inputName={'parentName'}
        setInput={setInput}
      />
      {phoneNumberColumn}
      <PhoneNumberColumn
        parentPhoneNumber={parentPhoneNumber}
        title={'보호자 연락처'}
        inputName={'parentPhoneNumber'}
        setInput={setInput}
      />
      <PhoneNumberColumn
        phoneNumber={phoneNumber}
        title={'본인 연락처'}
        inputName={'phoneNumber'}
        setInput={setInput}
      />
      <PhoneNumberColumn
        homePhoneNumber={homePhoneNumber}
        title={'자택 연락처'}
        inputName={'homePhoneNumber'}
        setInput={setInput}
      />
      <AddressColumn
        setInput={setInput}
        setIsClickAddressBtn={setIsClickAddressBtn}
        zipCode={zipCode}
        baseAddress={baseAddress}
        detailAddress={detailAddress}
      />
    </S.InformationForm>
  );
};

export default InformationForm;
