import React, { FC } from 'react';
import * as S from '../style';
import HeaderButton from './HeaderButton';
import HeaderDropDown from './HeaderDropdown';

interface Props {
  isLogin: boolean;
  name: string;
  phoneNumber: string;
  isfinalSubmitDone: boolean;
  isAdmissionFeePayed: boolean;
  isReceiveMail: boolean;
  studyPlanLength: number;
  selfIntroduceLength: number;
  logout: () => void;
}

const HeaderMenu: FC<Props> = state => {
  const userMenu = (
    <S.HeaderMenu>
      <HeaderButton buttonClickHandler={state.logout}>로그아웃</HeaderButton>
      <S.HeaderPartition>|</S.HeaderPartition>
      <HeaderDropDown {...state} />
    </S.HeaderMenu>
  );
  const renderMenu = () => {
    if (state.isLogin) {
      return userMenu;
    } else {
      return <S.HeaderMenu />;
    }
  };
  return renderMenu();
};

export default HeaderMenu;
