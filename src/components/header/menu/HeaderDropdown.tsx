import React, { FC } from 'react';
import * as S from '../style';
import HeaderDropdownContent from './HeaderDropdownContent';
interface Props {
  name: string;
  isLogin: boolean;
  phoneNumber: string;
  isfinalSubmitDone: boolean;
  isAdmissionFeePayed: boolean;
  isReceiveMail: boolean;
  studyPlanLength: number;
  selfIntroduceLength: number;
}

const HeaderDropDown: FC<Props> = state => {
  return (
    <S.HeaderDropDown>
      <S.HeaderMenuUser>
        <span>{state.name}</span>님 환영합니다
      </S.HeaderMenuUser>
      <input type='checkbox' />
      <S.HeaderDropdownArrowButton />
      <HeaderDropdownContent {...state} />
    </S.HeaderDropDown>
  );
};

export default HeaderDropDown;
