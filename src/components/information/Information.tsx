import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Pagination from '../default/Pagination';
import InformationForm from './InformationForm';
import {
  SCHOOL,
  INFORMATIONTITLE,
  schoolArrayType,
  addressType,
} from '../../constance/information';
import { informationType } from '../../constance/information';
import SearchSchoolModal from '../modal/searchSchool';
import AddressModal from '../modal/address';
import useSelectType from '../../util/hooks/selectType';

interface Props {
  name: string;
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolCode: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  schoolName: string;
  homePhoneNumber: string;
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  grade: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  totalScore: number;
  imageFile: File;
  imageUrl: string;
  content: Array<schoolArrayType>;
  totalPages: number;
  setInput: (payload: { name: string; value: string }) => void;
  setGender: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
  setImageUrl: (payload: string) => void;
  setImageFile: (payload: File) => void;
  informationImage: (payload: File) => void;
  information: (payload: informationType) => void;
  searchSchool: (payload: { schoolSearchName: string; size: number; page: number }) => void;
  setSchoolCode: (payload: string) => void;
  setAddress: (payload: addressType) => void;
}

const Information: FC<Props> = ({
  name,
  gender,
  birthYear,
  birthMonth,
  birthDate,
  schoolCode,
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
  totalScore,
  imageFile,
  imageUrl,
  content,
  schoolName,
  totalPages,
  setInput,
  setGender,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setImageFile,
  setImageUrl,
  informationImage,
  information,
  searchSchool,
  setSchoolCode,
  setAddress,
}) => {
  const changes = [
    name,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    schoolCode,
    schoolPhoneNumber,
    totalScore,
    parentName,
    parentPhoneNumber,
    phoneNumber,
    homePhoneNumber,
    zipCode,
    baseAddress,
    detailAddress,
    stdGrade,
    stdClass,
    stdNumber,
    imageUrl,
  ];
  const [isClickSearchBtn, setIsClickSearchBtn] = useState(false);
  const [isClickAddressBtn, setIsClickAddressBtn] = useState(false);
  const [showSchoolName, setShowSchoolName] = useState('');
  const educationalStatus = useSelectType().state.educationalStatus;

  const searchSchoolModal = useMemo(() => {
    if (isClickSearchBtn)
      return (
        <SearchSchoolModal
          setSchoolCode={setSchoolCode}
          searchSchool={searchSchool}
          setSchoolName={setShowSchoolName}
          content={content}
          setIsClickSearchBtn={setIsClickSearchBtn}
          totalPages={totalPages}
        />
      );
    else return;
  }, [isClickSearchBtn, content]);

  const addressModal = useMemo(() => {
    if (isClickAddressBtn)
      return <AddressModal setIsClickAddressBtn={setIsClickAddressBtn} setAddress={setAddress} />;
    else return;
  }, [isClickAddressBtn]);

  const pagination = useMemo(() => {
    if (
      name &&
      gender &&
      birthYear &&
      birthMonth &&
      birthDate &&
      parentName &&
      parentPhoneNumber &&
      phoneNumber &&
      zipCode &&
      baseAddress &&
      detailAddress &&
      ((schoolCode && schoolPhoneNumber && stdGrade && stdClass && stdNumber) || totalScore) &&
      imageUrl
    ) {
      if (educationalStatus === 'QUALIFICATION_EXAM')
        return (
          <Pagination
            prevPagePath={'/select-type'}
            nextPagePath={'/introduction'}
            isNextPage
            isQualification
          />
        );
      else return <Pagination prevPagePath={'/select-type'} nextPagePath={'/grade'} isNextPage />;
    } else {
      if (educationalStatus === 'QUALIFICATION_EXAM')
        return <Pagination prevPagePath={'/select-type'} isQualification />;
      else return <Pagination prevPagePath={'/select-type'} />;
    }
  }, [...changes]);

  return (
    <S.Information>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{INFORMATIONTITLE}</S.Title>
      </div>
      <InformationForm
        name={name}
        gender={gender}
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        schoolCode={schoolCode}
        showSchoolName={showSchoolName}
        schoolPhoneNumber={schoolPhoneNumber}
        parentName={parentName}
        parentPhoneNumber={parentPhoneNumber}
        phoneNumber={phoneNumber}
        homePhoneNumber={homePhoneNumber}
        zipCode={zipCode}
        schoolName={schoolName}
        baseAddress={baseAddress}
        detailAddress={detailAddress}
        grade={grade}
        stdGrade={stdGrade}
        stdClass={stdClass}
        stdNumber={stdNumber}
        imageFile={imageFile}
        imageUrl={imageUrl}
        totalScore={totalScore}
        setInput={setInput}
        setGender={setGender}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDate={setBirthDate}
        setImageUrl={setImageUrl}
        setImageFile={setImageFile}
        informationImage={informationImage}
        information={information}
        setIsClickSearchBtn={setIsClickSearchBtn}
        setIsClickAddressBtn={setIsClickAddressBtn}
      />
      {searchSchoolModal}
      {addressModal}
      {pagination}
    </S.Information>
  );
};

export default Information;
