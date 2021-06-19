import React, { FC, useState } from 'react';
import * as S from './style';
import { SELFINTRODUCTION, STUDYPLAN } from '../../constance/introduction';

interface Props {
  subTitle: string;
  explain: string;
  setIntroduction?: (payload: string) => void;
  setStudyPlan?: (payload: string) => void;
}

const SubContent: FC<Props> = ({ subTitle, explain, setIntroduction, setStudyPlan }) => {
  const [countText, SetCountText] = useState({ introductionText: 0, studyPlanText: 0 });
  const onIntroductionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduction(e.target.value);
    SetCountText({ ...countText, introductionText: e.target.value.length });
  };
  const onStudyPlanChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStudyPlan(e.target.value);
    SetCountText({ ...countText, studyPlanText: e.target.value.length });
  };

  return (
    <S.SubContent>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.Explain>{explain}</S.Explain>
      <S.TextBox>
        {subTitle === SELFINTRODUCTION && (
          <S.Textarea onChange={onIntroductionChange} maxLength={1600} />
        )}
        {subTitle === STUDYPLAN && <S.Textarea onChange={onStudyPlanChange} maxLength={1600} />}
        <S.CountText>
          <span>1600</span>
          <span>/</span>
          {subTitle === SELFINTRODUCTION && <span>{countText.introductionText}</span>}
          {subTitle === STUDYPLAN && <span>{countText.studyPlanText}</span>}
        </S.CountText>
      </S.TextBox>
    </S.SubContent>
  );
};

export default SubContent;
