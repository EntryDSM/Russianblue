import React, { FC } from 'react';
import * as S from '../style';
import HeaderDropdownContent from './HeaderDropdownContent';

interface Props {
  name: string;
  isLogin: boolean;
  phoneNumber: string;
  isfinalSubmitDone: boolean;
  isReceiveMail: boolean;
  studyPlanLength: number;
  selfIntroduceLength: number;
  applicationType: string;
}

const HeaderDropDown: FC<Props> = props => {
  return (
    <S.HeaderDropDown>
      <S.HeaderMenuUser>
        <span>{props.name}</span>님 환영합니다
      </S.HeaderMenuUser>
      <input type='checkbox' />
      <S.HeaderDropdownArrowButton />
      <HeaderDropdownContent {...props} />
    </S.HeaderDropDown>
  );
};

export default HeaderDropDown;
