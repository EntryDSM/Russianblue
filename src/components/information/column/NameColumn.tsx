import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  title: string;
  width: number;
  name: string;
}

const NameColumn: FC<Props> = ({ title, width, name }) => {
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
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
