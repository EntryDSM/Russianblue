import React, { FC, useEffect } from 'react';
import { usePreview } from '../../../util/hooks/preview';
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
  const preview = usePreview();
  const finalPdfDownloadButtonClickHandler = () => {
    preview.setState.getFinalPdf();
  };

  return (
    <S.HeaderDropDown>
      <S.HeaderMenuUser>
        <span>{props.name}</span>님 환영합니다
      </S.HeaderMenuUser>
      <input type='checkbox' />
      <S.HeaderDropdownArrowButton />
      <HeaderDropdownContent
        {...props}
        finalPdfDownloadButtonClickHandler={finalPdfDownloadButtonClickHandler}
      />
    </S.HeaderDropDown>
  );
};

export default HeaderDropDown;
