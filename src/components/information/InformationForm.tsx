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
  const graduation = useSelectType().state.educationalStatus;

  const styleInfo = useMemo(() => {
    if (graduation === '검정고시')
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

  const grade = useMemo(() => {
    if (graduation === '검정고시') return <TotalScoreColumn setInput={setInput} />;
    else
      return (
        <>
          <GradeColumn setInput={setInput} />
          <SchoolNameColumn setInput={setInput} />
        </>
      );
  }, [graduation]);

  const phoneNumberColumn = useMemo(() => {
    if (graduation !== '검정고시')
      return (
        <PhoneNumberColumn title={'학교 연락처'} name={'schoolPhoneNumber'} setInput={setInput} />
      );
  }, [graduation]);

  return (
    <S.InformationForm height={styleInfo.widthHeight.height}>
      <NameColumn
        title={'이름'}
        width={styleInfo.widthHeight.width}
        name={'name'}
        setInput={setInput}
      />
      <PictureBtn
        {...styleInfo.picture}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        setImageFile={setImageFile}
      />
      <GenderColumn width={styleInfo.widthHeight.width} setGender={setGender} />
      <BirthDateColumn
        width={styleInfo.widthHeight.width}
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        setBirthYear={setBirthYear}
        setBirthMonth={setBirthMonth}
        setBirthDate={setBirthDate}
      />
      {grade}
      <NameColumn title={'보호자명'} width={1220} name={'parentName'} setInput={setInput} />
      {phoneNumberColumn}
      <PhoneNumberColumn title={'보호자 연락처'} name={'parentPhoneNumber'} setInput={setInput} />
      <PhoneNumberColumn title={'본인 연락처'} name={'phoneNumber'} setInput={setInput} />
      <PhoneNumberColumn title={'자택 연락처'} name={'homePhoneNumber'} setInput={setInput} />
      <AddressColumn setInput={setInput} />
    </S.InformationForm>
  );
};

export default InformationForm;
