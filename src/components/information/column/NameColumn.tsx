import React, { FC, useEffect, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  name?: string;
  parentName?: string;
  title: string;
  width: number;
  inputName: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const NameColumn: FC<Props> = ({ title, width, inputName, setInput, name, parentName }) => {
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const nameInput = useMemo(() => {
    if (inputName === 'name')
      return (
        <Input
          width={166}
          height={42}
          inputChangeHandler={nameChangeHandler}
          name={inputName}
          defaultValue={name}
        />
      );
    else if (inputName === 'parentName')
      return (
        <Input
          width={166}
          height={42}
          inputChangeHandler={nameChangeHandler}
          name={inputName}
          defaultValue={parentName}
        />
      );
  }, [name, parentName]);

  return (
    <S.InformationLine width={width}>
      <S.InformationLineTitle>
        <span>*</span>
        {title}
      </S.InformationLineTitle>
      {nameInput}
    </S.InformationLine>
  );
};

export default NameColumn;
