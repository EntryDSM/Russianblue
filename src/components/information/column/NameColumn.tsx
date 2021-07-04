import React, { FC, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  userName?: string;
  parentName?: string;
  title: string;
  width: number;
  inputName: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const NameColumn: FC<Props> = ({ title, width, inputName, setInput, userName, parentName }) => {
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const nameInput = useMemo(() => {
    if (inputName === 'userName')
      return (
        <Input
          width={166}
          height={42}
          inputChangeHandler={nameChangeHandler}
          name={inputName}
          defaultValue={userName}
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
  }, [userName, parentName]);

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
