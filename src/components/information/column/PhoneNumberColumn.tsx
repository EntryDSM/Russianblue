import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { EXPLAIN } from '../../../constance/information';

interface Props {
  title: string;
  name: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const PhoneNumberColumn: FC<Props> = ({ title, name, setInput }) => {
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };
  return (
    <S.InformationLine width={1220}>
      <S.InformationLineTitle>
        <span>{name === 'homePhoneNumber' ? '' : '*'}</span>
        {title}
      </S.InformationLineTitle>
      <Input width={260} height={41} inputChangeHandler={phoneNumberChangeHandler} name={name} />
      <S.Explain>
        <span>*</span>
        {EXPLAIN}
      </S.Explain>
    </S.InformationLine>
  );
};

export default PhoneNumberColumn;
