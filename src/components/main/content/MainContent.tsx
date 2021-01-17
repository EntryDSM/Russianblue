import React, { FC } from 'react';
import * as S from '../style';
import mainConstance from './MainConstance';
import MainButton from './MainButton';
interface Props {
  nowProcess: string;
  date: string;
}

const MainContent: FC<Props> = ({ nowProcess, date }) => {
  const renderDescription = (date: string) => {
    if (mainConstance[nowProcess].isHaveTerm) {
      return mainConstance[nowProcess].getDescription(date);
    }
  };
  console.log(mainConstance[nowProcess].getTitle());
  return (
    <S.MainContentWrapper>
      <S.MainSubTitle>대덕소프트웨어마이스터고등학교</S.MainSubTitle>
      <S.MainTitle>2022년 신입생 모집</S.MainTitle>
      <S.MainDescription className='mainDescription'>
        {mainConstance[nowProcess].getTitle()}
      </S.MainDescription>
      <S.MainDescription className='subDescription'>{renderDescription(date)}</S.MainDescription>
      <MainButton>원서 작성</MainButton>
    </S.MainContentWrapper>
  );
};

export default MainContent;
