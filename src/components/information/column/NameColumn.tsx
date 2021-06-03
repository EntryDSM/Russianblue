import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  title: string;
  width: number;
  name: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const NameColumn: FC<Props> = ({ title, width, name, setInput }) => {
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };
  return (
    <S.InformationLine width={width}>
      <S.InformationLineTitle>
        <span>*</span>
        {title}
      </S.InformationLineTitle>
      <Input width={166} height={42} inputChangeHandler={nameChangeHandler} name={name} />
    </S.InformationLine>
  );
};

export default NameColumn;
