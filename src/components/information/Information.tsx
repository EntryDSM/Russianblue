import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Pagination from '../default/Pagination';
import InformationForm from './InformationForm';
import {
  SCHOOL,
  INFORMATIONTITLE,
  schoolArrayType,
  addressType,
  searchSchoolQueryType,
} from '../../constance/information';
import SearchSchoolModal from '../modal/searchSchool';
import AddressModal from '../modal/address';
import useSelectType from '../../util/hooks/selectType';

interface Props {
  userName: string;
  sex: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  parentName: string;
  parentTel: string;
  telephoneNumber: string;
  homeTel: string;
  address: string;
  detailAddress: string;
  postCode: string;
  schoolCode: string;
  schoolTel: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  schoolName: string;
  totalScore: number;
  photoFileName: string;
  pictureUrl: string;
  userPicture: File;
  page: number;
  size: number;
  totalPages: number;
  content: Array<schoolArrayType>;
  setInput: (payload: { name: string; value: string }) => void;
  setSex: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
  setImageUrl: (payload: string) => void;
  setSchoolCode: (payload: string) => void;
  setSchoolName: (payload: string) => void;
  setAddress: (payload: addressType) => void;
  setUserPicture: (payload: File) => void;
  searchSchool: (payload: searchSchoolQueryType) => void;
  setGedScore: (payload: number) => void;
}

const Information: FC<Props> = ({
  userName,
  sex,
  birthYear,
  birthMonth,
  birthDate,
  parentName,
  parentTel,
  telephoneNumber,
  homeTel,
  address,
  detailAddress,
  postCode,
  schoolCode,
  schoolTel,
  stdGrade,
  stdClass,
  stdNumber,
  schoolName,
  totalScore,
  photoFileName,
  pictureUrl,
  userPicture,
  totalPages,
  content,
  setInput,
  setSex,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setUserPicture,
  setImageUrl,
  setSchoolCode,
  setAddress,
  searchSchool,
  setSchoolName,
  setGedScore,
}) => {
  const changes = [
    userName,
    sex,
    birthYear,
    birthMonth,
    birthDate,
    schoolCode,
    schoolTel,
    totalScore,
    parentName,
    parentTel,
    telephoneNumber,
    homeTel,
    postCode,
    address,
    detailAddress,
    stdGrade,
    stdClass,
    stdNumber,
    pictureUrl,
    totalScore,
  ];
  const [isClickSearchBtn, setIsClickSearchBtn] = useState(false);
  const [isClickAddressBtn, setIsClickAddressBtn] = useState(false);
  const educationalStatus = useSelectType().state.educationalStatus;

  const searchSchoolModal = useMemo(() => {
    if (isClickSearchBtn)
      return (
        <SearchSchoolModal
          setSchoolCode={setSchoolCode}
          content={content}
          setIsClickSearchBtn={setIsClickSearchBtn}
          totalPages={totalPages}
          setSchoolName={setSchoolName}
          searchSchool={searchSchool}
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
      userName &&
      sex &&
      birthYear &&
      birthMonth &&
      birthDate &&
      parentName &&
      parentTel &&
      telephoneNumber &&
      postCode &&
      address &&
      detailAddress &&
      ((schoolCode && schoolTel && stdGrade && stdClass && stdNumber) || totalScore) &&
      (pictureUrl || photoFileName)
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
        userName={userName}
        sex={sex}
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        schoolCode={schoolCode}
        schoolTel={schoolTel}
        parentName={parentName}
        parentTel={parentTel}
        telephoneNumber={telephoneNumber}
        homeTel={homeTel}
        postCode={postCode}
        schoolName={schoolName}
        photoFileName={photoFileName}
        address={address}
        detailAddress={detailAddress}
        stdGrade={stdGrade}
        stdClass={stdClass}
        stdNumber={stdNumber}
        pictureUrl={pictureUrl}
        totalScore={totalScore}
        setInput={setInput}
        setSex={setSex}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDate={setBirthDate}
        setImageUrl={setImageUrl}
        setUserPicture={setUserPicture}
        setIsClickSearchBtn={setIsClickSearchBtn}
        setGedScore={setGedScore}
        setIsClickAddressBtn={setIsClickAddressBtn}
      />
      {searchSchoolModal}
      {addressModal}
      {pagination}
    </S.Information>
  );
};

export default Information;
