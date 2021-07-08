import React, { FC, useMemo, useState } from 'react';
import * as S from '../style';
import { GRADEANDSEMESTER, GRADE, GradeType } from '../../../constance/grade';
import { Grade } from '../../../modules/redux/reducer/grade/interface';

interface Props {
  isGraduated: boolean;
  grade: GradeType;
  title: string;
  subject: string;
  setGrade: (payload: { grade: GradeType }) => void;
}

const GradeColumn: FC<Props> = ({ title, setGrade, grade, subject, isGraduated }) => {
  const [isClick, setIsClick] = useState({
    freshmanFirst: false,
    freshmanSecond: false,
    sophomoreFirst: false,
    sophomoreSecond: false,
    seniorFirst: false,
    seniorSecond: false,
  });

  const gradeChange = (subject: string, dataId: string, dataGrade: string) => {
    let temp = [];
    for (let i = 0; i < grade[subject].length; i++) {
      temp.push(grade[subject][i]);
    }
    temp.splice(Grade[dataId], 1, dataGrade);
    return temp.join('');
  };

  const gradeClickHandler = e => {
    const dataId = e.target.dataset.id;
    const dataGrade = e.target.innerText;
    if (grade.isCheck[dataId] === false) {
      setGrade({
        grade: {
          ...grade,
          [subject]: gradeChange(subject, dataId, dataGrade),
        },
      });
    }
    setIsClick({ ...isClick, [dataId]: !isClick[dataId] });
  };

  const btnClickHandler = e => {
    const dataId = e.target.dataset.id;
    setIsClick({ ...isClick, [dataId]: !isClick[dataId] });
  };

  const gradeTableTd = useMemo(() => {
    return GRADEANDSEMESTER.map(data => {
      if (data.id === 'seniorSecond') {
        return (
          <S.GradeTableTd
            disabled={isGraduated}
            data-grade={data.grade}
            data-semester={data.semester}
            key={data.id}
            border
          >
            {isGraduated ? (
              <S.ScoreBtn disabled data-id={data.id} onClick={btnClickHandler}>
                X
              </S.ScoreBtn>
            ) : isClick[data.id] ? (
              GRADE.map(props => {
                return (
                  <S.ScoreBtn data-id={data.id} onClick={gradeClickHandler}>
                    {props.grade}
                  </S.ScoreBtn>
                );
              })
            ) : (
              <S.ScoreBtn data-id={data.id} onClick={btnClickHandler}>
                {grade[subject][Grade[data.id]]}
              </S.ScoreBtn>
            )}
          </S.GradeTableTd>
        );
      }
      return (
        <S.GradeTableTd data-grade={data.grade} data-semester={data.semester} key={data.id} border>
          {isClick[data.id] ? (
            GRADE.map(props => {
              return (
                <S.ScoreBtn data-id={data.id} onClick={gradeClickHandler}>
                  {props.grade}
                </S.ScoreBtn>
              );
            })
          ) : (
            <S.ScoreBtn data-id={data.id} onClick={btnClickHandler}>
              {grade[subject][Grade[data.id]]}
            </S.ScoreBtn>
          )}
        </S.GradeTableTd>
      );
    });
  }, [isGraduated, isClick, grade]);

  return (
    <S.GradeColumn>
      <S.TableTitle height={75} padding={28}>
        {title}
      </S.TableTitle>
      {gradeTableTd}
    </S.GradeColumn>
  );
};

export default GradeColumn;
