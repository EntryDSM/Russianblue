import React, { FC, useMemo } from 'react';
import * as S from '../style';
import { GRADEANDSEMESTER, GradeType, SemesterType } from '../../../constance/grade';
import { Grade } from '../../../modules/redux/reducer/grade/interface';

interface Props {
  isGraduated: boolean;
  grade: GradeType;
  isResetZeroClick: SemesterType;
  setIsResetZeroClick: React.Dispatch<React.SetStateAction<SemesterType>>;
  setGrade: (payload: { grade: GradeType }) => void;
}

const CheckColumn: FC<Props> = ({
  isResetZeroClick,
  setIsResetZeroClick,
  setGrade,
  grade,
  isGraduated,
}) => {
  const gradeChange = (subject: string, dataId: string) => {
    let temp = [];
    for (let i = 0; i < grade[subject].length; i++) {
      temp.push(grade[subject][i]);
    }
    temp.splice(Grade[dataId], 1, 'X');
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
      if (props.id === 'seniorSecond') {
        return (
          <S.GradeTableTd disabled={isGraduated} key={props.id} border>
            <S.CheckBtnBox disabled={isGraduated} data-id={props.id} onClick={btnClickHandler}>
              {isGraduated ? (
                <S.CheckedBtnBox
                  disabled={isGraduated}
                  data-id={props.id}
                  onClick={btnClickHandler}
                />
              ) : (
                isResetZeroClick[props.id] && (
                  <S.CheckedBtnBox
                    disabled={isGraduated}
                    data-id={props.id}
                    onClick={btnClickHandler}
                  />
                )
              )}
            </S.CheckBtnBox>
          </S.GradeTableTd>
        );
      } else
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
  }, [isResetZeroClick, grade, isGraduated]);

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
