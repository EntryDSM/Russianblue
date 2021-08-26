import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { SELFINTRODUCTION, STUDYPLAN } from '../../constance/introduction';

interface Props {
  subTitle: string;
  explain: string;
  selfIntroduction?: string;
  studyPlan?: string;
  setIntroduction?: (payload: string) => void;
  setStudyPlan?: (payload: string) => void;
}

const SubContent: FC<Props> = ({
  subTitle,
  explain,
  selfIntroduction,
  studyPlan,
  setIntroduction,
  setStudyPlan,
}) => {
  const [countText, SetCountText] = useState({
    introductionText: 0,
    studyPlanText: 0,
  });

  useEffect(() => {
    const selfIntroductionLength = selfIntroduction ? String(selfIntroduction).length : 0;
    const studyPlanLength = studyPlan ? String(studyPlan).length : 0;
    SetCountText({
      introductionText: selfIntroductionLength,
      studyPlanText: studyPlanLength,
    });
  }, [selfIntroduction, studyPlan]);

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
          <S.Textarea
            defaultValue={selfIntroduction}
            onChange={onIntroductionChange}
            maxLength={1600}
          />
        )}
        {subTitle === STUDYPLAN && (
          <S.Textarea defaultValue={studyPlan} onChange={onStudyPlanChange} maxLength={1600} />
        )}
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
