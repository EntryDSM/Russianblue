import React, { FC } from 'react';
import * as S from '../style';

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

const HeaderDropdownContent: FC<Props> = ({
  name,
  isLogin,
  phoneNumber,
  isAdmissionFeePayed,
  isfinalSubmitDone,
  isReceiveMail,
  studyPlanLength,
  selfIntroduceLength,
}) => {
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
            <S.HeaderDropdownContentProcessButton>제출 서류</S.HeaderDropdownContentProcessButton>
          </S.HeaderDropdownContentProcessText>
          <S.HeaderDropdownContentProcessSubText>
            2021년 12월 20일 - 20시 21분 제출 완료
          </S.HeaderDropdownContentProcessSubText>
        </div>
      </S.HeaderDropdownColumn>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>전형료 납부</S.HeaderDropdownContentTitle>
        <S.HeaderDropdownContentProcessText isComplete={isAdmissionFeePayed}>
          {isAdmissionFeePayed ? '완료' : '미완료'}
        </S.HeaderDropdownContentProcessText>
      </S.HeaderDropdownColumn>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>우편물 수령</S.HeaderDropdownContentTitle>
        <S.HeaderDropdownContentProcessText isComplete={isReceiveMail}>
          {isReceiveMail ? '완료' : '미완료'}
        </S.HeaderDropdownContentProcessText>
      </S.HeaderDropdownColumn>
      <S.HeaderDropdownColumn>
        <S.HeaderDropdownContentTitle>전형 구분</S.HeaderDropdownContentTitle>
        <S.HeaderDropdownContentProcessText isComplete={false}></S.HeaderDropdownContentProcessText>
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
