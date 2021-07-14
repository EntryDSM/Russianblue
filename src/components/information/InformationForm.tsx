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

interface Props {
  userName: string;
  sex: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolCode: string;
  schoolName: string;
  schoolTel: string;
  parentName: string;
  parentTel: string;
  telephoneNumber: string;
  homeTel: string;
  postCode: string;
  address: string;
  detailAddress: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  pictureUrl: string;
  totalScore: string;
  photoFileName: string;
  setInput: (payload: { name: string; value: string }) => void;
  setSex: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
  setImageUrl: (payload: string) => void;
  setUserPicture: (payload: File) => void;
  setGedScore: (payload: string) => void;
  setIsClickSearchBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClickAddressBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const InformationForm: FC<Props> = ({
  userName,
  sex,
  birthYear,
  birthMonth,
  birthDate,
  schoolName,
  schoolTel,
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
  photoFileName,
  setInput,
  setSex,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setUserPicture,
  setImageUrl,
  setIsClickSearchBtn,
  setIsClickAddressBtn,
  setGedScore,
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
          paddingTop: 115,
          paddingSide: 84,
          top: 18,
        },
      };
  }, [graduation]);

  const showGrade = useMemo(() => {
    if (graduation === 'QUALIFICATION_EXAM')
      return <TotalScoreColumn setGedScore={setGedScore} totalScore={totalScore} />;
    else
      return (
        <>
          <GradeColumn
            setInput={setInput}
            stdGrade={stdGrade}
            stdClass={stdClass}
            stdNumber={stdNumber}
          />
          <SchoolNameColumn schoolName={schoolName} setIsClickSearchBtn={setIsClickSearchBtn} />
        </>
      );
  }, [setInput, graduation, schoolName, totalScore]);

  const phoneNumberColumn = useMemo(() => {
    if (graduation !== 'QUALIFICATION_EXAM')
      return (
        <PhoneNumberColumn
          schoolTel={schoolTel}
          title={'학교 연락처'}
          inputName={'schoolTel'}
          setInput={setInput}
        />
      );
  }, [graduation, schoolTel]);

  return (
    <S.InformationForm height={styleInfo.widthHeight.height}>
      <NameColumn
        userName={userName}
        title={'이름'}
        width={styleInfo.widthHeight.width}
        inputName={'userName'}
        setInput={setInput}
      />
      <PictureBtn
        {...styleInfo.picture}
        pictureUrl={pictureUrl}
        photoFileName={photoFileName}
        setImageUrl={setImageUrl}
        setUserPicture={setUserPicture}
      />
      <GenderColumn width={styleInfo.widthHeight.width} setSex={setSex} sex={sex} />
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
        parentTel={parentTel}
        title={'보호자 연락처'}
        inputName={'parentTel'}
        setInput={setInput}
      />
      <PhoneNumberColumn
        telephoneNumber={telephoneNumber}
        title={'본인 연락처'}
        inputName={'telephoneNumber'}
        setInput={setInput}
      />
      <PhoneNumberColumn
        homeTel={homeTel}
        title={'자택 연락처'}
        inputName={'homeTel'}
        setInput={setInput}
      />
      <AddressColumn
        setInput={setInput}
        setIsClickAddressBtn={setIsClickAddressBtn}
        postCode={postCode}
        address={address}
        detailAddress={detailAddress}
      />
    </S.InformationForm>
  );
};

export default InformationForm;
