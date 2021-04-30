import React from 'react';
import * as S from './style';
import { SCHOOL, INFOTITLE } from '../Constance';
import { imgIcon } from '../../../assets/Info';
import { InfoLine } from '..';
import Page from '../../default/Page';
import { IMG_EXPLAIN, IMG_FORMATS } from '../Constance';

const QualificationInfo = () => {
  return (
    <S.AllContents>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{INFOTITLE}</S.Title>
      </div>
      <S.MainLine />
      <S.ImgBtn>
        <img src={imgIcon} />
        <p>{IMG_EXPLAIN}</p>
        <p>{IMG_FORMATS}</p>
      </S.ImgBtn>
      <InfoLine width={904} inputWidth={166} title='이름' isEssential />
      <InfoLine width={904} title='성별' isEssential />
      <InfoLine width={904} title='생년월일' isEssential />
      <InfoLine width={904} inputWidth={114} title='검정고시 총점' isEssential />
      <InfoLine width={1220} inputWidth={166} title='보호자명' isEssential />
      <InfoLine width={1220} inputWidth={260} title='학교 연락처' isEssential explain />
      <InfoLine width={1220} inputWidth={260} title='보호자 연락처' isEssential explain />
      <InfoLine width={1220} inputWidth={260} title='본인 연락처' isEssential explain />
      <InfoLine width={1220} inputWidth={260} title='자택 연락처' isEssential={false} explain />
      <InfoLine width={1220} title='주소' isEssential />
      <S.MainLine />
      <Page />
    </S.AllContents>
  );
};

export default QualificationInfo;
