import React, { FC } from 'react';
import * as S from '../style';
import { VolunteerColumn } from '../column';

interface Props {
  volunteerTime: number;
  absence: number;
  leave: number;
  lateness: number;
  truancy: number;
  setInput: (payload: { name: string; value: number }) => void;
}

const VolunteerTable: FC<Props> = ({
  setInput,
  volunteerTime,
  absence,
  leave,
  lateness,
  truancy,
}) => {
  return (
    <S.VolunteerTable>
      <div>
        <S.TableTitle height={70} padding={25}>
          봉사시간
        </S.TableTitle>
        <S.TableTitle height={140} padding={60}>
          출석정보
        </S.TableTitle>
      </div>
      <div>
        <div>
          <VolunteerColumn
            unit={'시간'}
            border
            name={'volunteerTime'}
            setInput={setInput}
            value={String(volunteerTime)}
          />
          <S.TableTd />
        </div>
        <div>
          <VolunteerColumn
            title={'전체 미인정 결석 일수'}
            unit={'일'}
            border
            name={'absence'}
            setInput={setInput}
            value={String(absence)}
          />
          <VolunteerColumn
            title={'전체 미인정 조퇴 일수'}
            unit={'일'}
            name={'leave'}
            setInput={setInput}
            value={String(leave)}
          />
        </div>
        <div>
          <VolunteerColumn
            title={'전체 미인정 지각 일수'}
            unit={'일'}
            border
            name={'lateness'}
            setInput={setInput}
            value={String(lateness)}
          />
          <VolunteerColumn
            title={'전체 미인정 결과 일수'}
            unit={'일'}
            name={'truancy'}
            setInput={setInput}
            value={String(truancy)}
          />
        </div>
      </div>
    </S.VolunteerTable>
  );
};

export default VolunteerTable;
