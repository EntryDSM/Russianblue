import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { useGrade } from '../../../util/hooks/grade';

interface Props {
  title?: string;
  unit: string;
  border?: boolean;
  name: string;
  setInput: (payload: { name: string; value: number }) => void;
}

const VolunteerColumn: FC<Props> = ({ title, unit, border, name, setInput }) => {
  const { state } = useGrade();
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: Number(e.target.value) });
  };
  return (
    <S.TableTd border={border}>
      {title && <p>{title}</p>}
      <div>
        <Input width={76} height={36} inputChangeHandler={inputChangeHandler} name={name} />
        <p>{unit}</p>
      </div>
    </S.TableTd>
  );
};

export default VolunteerColumn;
