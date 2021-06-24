import React, { FC } from 'react';
import * as S from '../style';
import { VolunteerColumn } from '../column';

interface Props {
  setInput: (payload: { name: string; value: number }) => void;
}

const VolunteerTable: FC<Props> = ({ setInput }) => {
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
          <VolunteerColumn unit={'시간'} border name={'volunteerTime'} setInput={setInput} />
          <S.TableTd />
        </div>
        <div>
          <VolunteerColumn
            title={'전체 무단(미인정) 결석 일수'}
            unit={'일'}
            border
            name={'absence'}
            setInput={setInput}
          />
          <VolunteerColumn
            title={'전체 무단 조퇴 일수'}
            unit={'일'}
            name={'leave'}
            setInput={setInput}
          />
        </div>
        <div>
          <VolunteerColumn
            title={'전체 무단 지각 일수'}
            unit={'일'}
            border
            name={'lateness'}
            setInput={setInput}
          />
          <VolunteerColumn
            title={'전체 무단 결과 일수'}
            unit={'일'}
            name={'truancy'}
            setInput={setInput}
          />
        </div>
      </div>
    </S.VolunteerTable>
  );
};

export default VolunteerTable;
