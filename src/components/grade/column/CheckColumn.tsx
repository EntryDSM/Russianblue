import React, { FC, useMemo, useState } from 'react';
import * as S from '../style';
import { GradeType, semesterType } from '../../../modules/redux/action/grade/interface';
import { GRADEANDSEMESTER } from '../../../constance/grade';
import { Grade } from '../../../modules/redux/reducer/grade/interface';

interface Props {
  grade: GradeType;
  isResetZeroClick: semesterType;
  setIsResetZeroClick: React.Dispatch<React.SetStateAction<semesterType>>;
  setGrade: (payload: { grade: GradeType }) => void;
}

const CheckColumn: FC<Props> = ({ isResetZeroClick, setIsResetZeroClick, setGrade, grade }) => {
  const gradeChange = (subject: string, dataId: string) => {
    let temp = [];
    for (let i = 0; i < grade[subject].length; i++) {
      temp.push(grade[subject][i]);
    }
    temp.splice(Grade[dataId], 1, '0');
    return temp.join('');
  };

  const btnClickHandler = e => {
    const dataId = e.target.dataset.id;
    setIsResetZeroClick({ ...isResetZeroClick, [dataId]: !isResetZeroClick[dataId] });
    setGrade({
      grade: {
        korean: gradeChange('korean', dataId),
        social: gradeChange('social', dataId),
        history: gradeChange('history', dataId),
        math: gradeChange('math', dataId),
        science: gradeChange('science', dataId),
        technical: gradeChange('technical', dataId),
        english: gradeChange('english', dataId),
        isCheck: {
          ...grade.isCheck,
          [dataId]: !isResetZeroClick[dataId],
        },
      },
    });
  };

  const gradeTableTd = useMemo(() => {
    return GRADEANDSEMESTER.map(props => {
      return (
        <S.GradeTableTd key={props.id} border>
          <S.CheckBtnBox data-id={props.id} onClick={btnClickHandler}>
            {isResetZeroClick[props.id] && (
              <S.CheckedBtnBox data-id={props.id} onClick={btnClickHandler} />
            )}
          </S.CheckBtnBox>
        </S.GradeTableTd>
      );
    });
  }, [isResetZeroClick, grade]);

  return (
    <S.GradeColumn>
      <S.TableTitle height={75} padding={28}>
        미이수학기
      </S.TableTitle>
      {gradeTableTd}
    </S.GradeColumn>
  );
};

export default CheckColumn;
