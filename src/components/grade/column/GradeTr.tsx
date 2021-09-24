import React, { useMemo } from 'react';
import * as S from '../style';
import { SEMESTERTABLEDATA } from '../../../constance/grade';

const GradeTr = () => {
  const SemesterTableData = useMemo(() => {
    return SEMESTERTABLEDATA.map(props => {
      return (
        <S.SemesterTd width={267.75} key={props.id}>
          {props.title}
        </S.SemesterTd>
      );
    });
  }, []);

  return (
    <S.GradeTr>
      <S.TableTitle height={145} padding={0} />
      <div>
        <div>
          <S.GradeTd width={535.5}>3학년</S.GradeTd>
          <S.GradeTd width={535.5}>성적이 있는 최근 학기</S.GradeTd>
        </div>
        <div>{SemesterTableData}</div>
      </div>
    </S.GradeTr>
  );
};

export default GradeTr;
