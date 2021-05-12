import React, { FC } from 'react';
import useIntroduction from '../../util/hooks/Introduction';
import * as S from './style';
import { SELFINTRODUCTION, STUDYPLAN } from '../../constance/introduction';

interface Props {
  subTitle: string;
  explain: string;
}

const SubContent: FC<Props> = ({ subTitle, explain }) => {
  const { state, setState } = useIntroduction();
  const onIntroductionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState.setIntroduction(e.target.value);
  };
  const onStudyPlanChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState.setStudyPlan(e.target.value);
  };

  return (
    <S.SubContent>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.Explain>{explain}</S.Explain>
      <S.TextBox>
        {subTitle === SELFINTRODUCTION && <S.Textarea onChange={onIntroductionChange} />}
        {subTitle === STUDYPLAN && <S.Textarea onChange={onStudyPlanChange} />}
        <S.CountText>
          <span>1600</span>
          <span>/</span>
          <span>0</span>
        </S.CountText>
      </S.TextBox>
    </S.SubContent>
  );
};

export default SubContent;
