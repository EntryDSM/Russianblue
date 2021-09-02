import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  name: string;
  isLogin: boolean;
  phoneNumber: string;
  isfinalSubmitDone: boolean;
  isReceiveMail: boolean;
  studyPlanLength: number;
  selfIntroduceLength: number;
  applicationType: string;
  finalPdfDownloadButtonClickHandler: () => void;
}

const HeaderDropdownContent: FC<Props> = ({
  name,
  phoneNumber,
  isfinalSubmitDone,
  isReceiveMail,
  studyPlanLength,
  selfIntroduceLength,
  applicationType,
  finalPdfDownloadButtonClickHandler,
}) => {
  const getApplicationTypeText = (applicationType: string) => {
    switch (applicationType) {
      case 'COMMON':
        return '일반 전형';
      case 'MEISTER':
        return '마이스터 전형';
      case 'SOCIAL':
        return '사회통합 전형';
    }
  };

  const contentClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <S.HeaderDropdownContent onClick={contentClickHandler}>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>이름</S.HeaderDropdownContentTitle>
        <S.HeaderDropdownContentText>{name}</S.HeaderDropdownContentText>
      </S.HeaderDropdownColumn>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>전화번호</S.HeaderDropdownContentTitle>
        <S.HeaderDropdownContentText>{phoneNumber}</S.HeaderDropdownContentText>
      </S.HeaderDropdownColumn>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>최종제출</S.HeaderDropdownContentTitle>
        <div>
          <S.HeaderDropdownContentProcessText isComplete={isfinalSubmitDone}>
            {isfinalSubmitDone ? '완료' : '미완료'}
            {isfinalSubmitDone ? (
              <S.HeaderDropdownContentProcessButton onClick={finalPdfDownloadButtonClickHandler}>
                제출 서류
              </S.HeaderDropdownContentProcessButton>
            ) : (
              ''
            )}
          </S.HeaderDropdownContentProcessText>
        </div>
      </S.HeaderDropdownColumn>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>우편물 수령</S.HeaderDropdownContentTitle>
        <S.HeaderDropdownContentProcessText isComplete={isReceiveMail}>
          {isReceiveMail ? '완료' : '미완료'}
        </S.HeaderDropdownContentProcessText>
      </S.HeaderDropdownColumn>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>전형 구분</S.HeaderDropdownContentTitle>
        <S.HeaderDropdownContentProcessText isComplete={false}>
          {getApplicationTypeText(applicationType)}
        </S.HeaderDropdownContentProcessText>
      </S.HeaderDropdownColumn>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>자기소개서</S.HeaderDropdownContentTitle>
        <div>
          <S.HeaderDropdownContentIntroduceText>
            자기소개서({selfIntroduceLength}/1600)
          </S.HeaderDropdownContentIntroduceText>
          <S.HeaderDropdownContentIntroduceText>
            학업계획서({studyPlanLength}/1600)
          </S.HeaderDropdownContentIntroduceText>
        </div>
      </S.HeaderDropdownColumn>
    </S.HeaderDropdownContent>
  );
};

export default HeaderDropdownContent;
