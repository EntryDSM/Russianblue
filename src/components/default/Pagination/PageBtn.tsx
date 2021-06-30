import React, { FC, useMemo, useEffect, useState } from 'react';
import * as S from './style';
import {
  left_arrow,
  left_arrow_disabled,
  right_arrow,
  right_arrow_disabled,
} from '../../../assets/default';
import useIntroduction from '../../../util/hooks/Introduction';
import { useHistory, useLocation } from 'react-router-dom';
import useSelectType from '../../../util/hooks/selectType';
import useInformation from '../../../util/hooks/information';

interface Props {
  prevPagePath?: string;
  nextPagePath?: string;
  content: String;
  disabled?: boolean;
}

const PageBtn: FC<Props> = ({ content, disabled, prevPagePath, nextPagePath }) => {
  const history = useHistory();
  const pathname = useLocation().pathname.slice(1);
  const [prevNextBtn, setPrevNextBtn] = useState({
    prevBtn: false,
    nextBtn: false,
  });

  const introState = useIntroduction().state;
  const introSetState = useIntroduction().setState;
  const selfIntroduction = introState.selfIntroduction;
  const studyPlan = introState.studyPlan;

  const selectTypeState = useSelectType().state;
  const selectTypeSetState = useSelectType().setState;
  const educationalStatus = selectTypeState.educationalStatus;
  const applicationType = selectTypeState.applicationType;
  const isDaejeon = selectTypeState.isDaejeon;
  const applicationRemark = selectTypeState.applicationRemark;
  const graduationYear = String(selectTypeState.graduationYear);
  const graduationMonth = String(selectTypeState.graduationMonth);
  let graduated_YM = '';
  if (graduationMonth.length === 1) {
    graduated_YM = graduationYear + '0' + graduationMonth;
  } else {
    graduated_YM = graduationYear + graduationMonth;
  }

  const inforState = useInformation().state;
  const inforSetState = useInformation().setState;
  const name = inforState.name;
  const gender = inforState.gender;
  const birthYear = inforState.birthYear;
  const birthMonth = inforState.birthMonth;
  const birthDate = inforState.birthDate;
  const schoolCode = educationalStatus === 'QUALIFICATION_EXAM' ? null : inforState.schoolCode;
  const schoolPhoneNumber =
    educationalStatus === 'QUALIFICATION_EXAM' ? null : inforState.schoolPhoneNumber;
  const parentName = inforState.parentName;
  const parentPhoneNumber = inforState.parentPhoneNumber;
  const phoneNumber = inforState.phoneNumber;
  const homePhoneNumber = inforState.homePhoneNumber;
  const baseAddress = inforState.baseAddress;
  const detailAddress = inforState.detailAddress;
  const zipCode = inforState.zipCode;
  const stdClass = inforState.stdClass;
  const stdGrade = inforState.stdGrade;
  const stdNumber = inforState.stdNumber;
  const totalScore = inforState.totalScore;

  const change = [
    selfIntroduction,
    studyPlan,
    educationalStatus,
    applicationRemark,
    applicationType,
    isDaejeon,
    graduationMonth,
    graduationYear,
    name,
    gender,
    birthYear,
    totalScore,
    birthMonth,
    birthDate,
    schoolCode,
    schoolPhoneNumber,
    parentName,
    parentPhoneNumber,
    phoneNumber,
    homePhoneNumber,
    baseAddress,
    detailAddress,
    zipCode,
    stdClass,
    stdGrade,
    stdNumber,
  ];

  useEffect(() => {
    let isSuccessAction = undefined;
    switch (pathname) {
      case 'introduction':
        isSuccessAction = introState.isSuccessSaveBoth;
        break;
      case 'select-type':
        isSuccessAction = selectTypeState.isSuccessSaveSelectType;
        break;
      case 'information':
        if (educationalStatus === 'QUALIFICATION_EXAM') {
          isSuccessAction = inforState.isSuccessSaveGedInformation;
        } else isSuccessAction = inforState.isSuccessSaveInformation;
        break;
      case 'grade':
        break;
      case 'preview':
        break;
    }
    if (isSuccessAction) {
      if (prevNextBtn.prevBtn) {
        history.push(prevPagePath);
      }
      if (prevNextBtn.nextBtn) {
        history.push(nextPagePath);
      }
    } else if (isSuccessAction === false) {
      alert('실패');
    } else if (isSuccessAction === undefined) {
      console.log('요청이 안갔습니다');
    }
  }, [
    introState.isSuccessSaveBoth,
    prevNextBtn.prevBtn,
    prevNextBtn.nextBtn,
    selectTypeState.isSuccessSaveSelectType,
    inforState.isSuccessSaveInformation,
  ]);

  const prevBtnClickHandler = () => {
    switch (pathname) {
      case 'introduction':
        introSetState.saveBoth({ selfIntroduction, studyPlan });
        break;
      case 'select-type':
        selectTypeSetState.selectType({
          educationalStatus: educationalStatus,
          applicationType: applicationType,
          isDaejeon: isDaejeon,
          applicationRemark: applicationRemark,
          graduatedAt: graduated_YM,
        });
        break;
      case 'information':
        if (educationalStatus === 'QUALIFICATION_EXAM')
          inforSetState.gedInformation({
            name: name,
            gender: gender,
            birthYear: birthYear,
            birthMonth: birthMonth,
            birthDate: birthDate,
            parentName: parentName,
            parentPhoneNumber: parentPhoneNumber,
            phoneNumber: phoneNumber,
            homePhoneNumber: homePhoneNumber ? homePhoneNumber : null,
            baseAddress: baseAddress,
            detailAddress: detailAddress,
            zipCode: zipCode,
            totalScore: totalScore,
          });
        else
          inforSetState.information({
            name: name,
            gender: gender,
            birthYear: birthYear,
            birthMonth: birthMonth,
            birthDate: birthDate,
            parentName: parentName,
            parentPhoneNumber: parentPhoneNumber,
            phoneNumber: phoneNumber,
            homePhoneNumber: homePhoneNumber ? homePhoneNumber : null,
            baseAddress: baseAddress,
            detailAddress: detailAddress,
            zipCode: zipCode,
            schoolCode: schoolCode,
            schoolPhoneNumber: schoolPhoneNumber,
            stdGrade: stdGrade,
            stdClass: stdClass,
            stdNumber: stdNumber,
          });
        break;
      default:
    }
    setPrevNextBtn({ prevBtn: true, nextBtn: false });
  };

  const nextBtnClickHandler = () => {
    switch (pathname) {
      case 'introduction':
        introSetState.saveBoth({ selfIntroduction, studyPlan });
        break;
      case 'select-type':
        selectTypeSetState.selectType({
          educationalStatus: educationalStatus,
          applicationType: applicationType,
          isDaejeon: isDaejeon,
          applicationRemark: applicationRemark,
          graduatedAt: graduated_YM,
        });
        break;
      case 'information':
        if (educationalStatus === 'QUALIFICATION_EXAM')
          inforSetState.gedInformation({
            name: name,
            gender: gender,
            birthYear: birthYear,
            birthMonth: birthMonth,
            birthDate: birthDate,
            parentName: parentName,
            parentPhoneNumber: parentPhoneNumber,
            phoneNumber: phoneNumber,
            homePhoneNumber: homePhoneNumber ? homePhoneNumber : null,
            baseAddress: baseAddress,
            detailAddress: detailAddress,
            zipCode: zipCode,
            totalScore: totalScore,
          });
        else
          inforSetState.information({
            name: name,
            gender: gender,
            birthYear: birthYear,
            birthMonth: birthMonth,
            birthDate: birthDate,
            parentName: parentName,
            parentPhoneNumber: parentPhoneNumber,
            phoneNumber: phoneNumber,
            homePhoneNumber: homePhoneNumber ? homePhoneNumber : null,
            baseAddress: baseAddress,
            detailAddress: detailAddress,
            zipCode: zipCode,
            schoolCode: schoolCode,
            schoolPhoneNumber: schoolPhoneNumber,
            stdGrade: stdGrade,
            stdClass: stdClass,
            stdNumber: stdNumber,
          });
      default:
    }
    setPrevNextBtn({ prevBtn: false, nextBtn: true });
  };

  const prevBtn = useMemo(() => {
    if (content === '이전') {
      if (disabled)
        return (
          <S.PageBtn disabled={disabled}>
            <img src={left_arrow_disabled} />
            <div>{content}</div>
          </S.PageBtn>
        );
      else
        return (
          <S.PageBtn disabled={disabled} onClick={prevBtnClickHandler}>
            <img src={left_arrow} />
            <div>{content}</div>
          </S.PageBtn>
        );
    } else return;
  }, [disabled, ...change]);

  const nextBtn = useMemo(() => {
    if (content === '다음') {
      if (disabled)
        return (
          <S.PageBtn disabled={disabled}>
            <div>{content}</div>
            <img src={right_arrow_disabled} />
          </S.PageBtn>
        );
      else
        return (
          <S.PageBtn disabled={disabled} onClick={nextBtnClickHandler}>
            <div>{content}</div>
            <img src={right_arrow} />
          </S.PageBtn>
        );
    } else return;
  }, [disabled, ...change]);

  return (
    <>
      {prevBtn}
      {nextBtn}
    </>
  );
};

export default PageBtn;
