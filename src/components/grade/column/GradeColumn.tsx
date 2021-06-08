import React, { FC, useMemo, useState } from 'react';
import * as S from '../style';
import { GRADEANDSEMESTER, GRADE } from '../../../constance/grade';
import { GradeType } from '../../../modules/redux/action/grade/interface';

interface Props {
  grade: GradeType;
  title: string;
  subject: string;
  setGrade: (payload: { grade: GradeType }) => void;
}

const GradeColumn: FC<Props> = ({ title, setGrade, grade, subject }) => {
  const [isClick, setIsClick] = useState({
    11: false,
    12: false,
    21: false,
    22: false,
    23: false,
  });
  const gradeClickHandler = e => {
    const dataId = e.target.dataset.id;
    const dataGrade = e.target.innerText;
    setGrade({
      grade: {
        ...grade,
        [subject]: {
          ...grade[subject],
          [dataId]: dataGrade,
        },
      },
    });
    console.log(grade);
    setIsClick({ ...isClick, [dataId]: !isClick[dataId] });
  };
  const btnClickHandler = e => {
    const dataId = Number(e.target.dataset.id);
    setIsClick({ ...isClick, [dataId]: !isClick[dataId] });
  };

  const gradeTableTd = useMemo(() => {
    return GRADEANDSEMESTER.map(data => {
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
              {grade[subject][Number(data.id)]}
            </S.ScoreBtn>
          )}
        </S.GradeTableTd>
      );
    });
  }, [isClick]);

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
