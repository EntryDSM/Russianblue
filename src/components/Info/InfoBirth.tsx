import React from 'react';
import * as S from './style';
import { dropdown } from '../../assets/default';
import { InfoBirthSubSelect } from './';

const InfoBirth = () => {
  return (
    <S.InfoBirth>
      <S.InfoBirthBtn width={114}>
        <p>2006</p>
        <S.InfoDropdown src={dropdown} />
        <InfoBirthSubSelect type='year' />
      </S.InfoBirthBtn>
      <p>년</p>
      <S.InfoBirthBtn width={83}>
        <p>12</p>
        <S.InfoDropdown src={dropdown} />
        <InfoBirthSubSelect type='month' />
      </S.InfoBirthBtn>
      <p>월</p>
      <S.InfoBirthBtn width={83}>
        <p>12</p>
        <S.InfoDropdown src={dropdown} />
        <InfoBirthSubSelect type='date' />
      </S.InfoBirthBtn>
      <p>일</p>
    </S.InfoBirth>
  );
};

export default InfoBirth;
