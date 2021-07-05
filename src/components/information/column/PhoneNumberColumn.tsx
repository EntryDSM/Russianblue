import React, { FC, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { EXPLAIN } from '../../../constance/information';

interface Props {
  title: string;
  inputName: string;
  schoolTel?: string;
  parentTel?: string;
  telephoneNumber?: string;
  homeTel?: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const PhoneNumberColumn: FC<Props> = ({
  title,
  inputName,
  setInput,
  schoolTel,
  parentTel,
  telephoneNumber,
  homeTel,
}) => {
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const phoneNumberInput = useMemo(() => {
    let inputDefaultValue = '';
    if (inputName === 'schoolTel') inputDefaultValue = schoolTel;
    else if (inputName === 'parentTel') inputDefaultValue = parentTel;
    else if (inputName === 'telephoneNumber') inputDefaultValue = telephoneNumber;
    else if (inputName === 'homeTel') inputDefaultValue = homeTel;
    return (
      <Input
        width={260}
        height={41}
        inputChangeHandler={phoneNumberChangeHandler}
        name={inputName}
        defaultValue={inputDefaultValue}
      />
    );
  }, [schoolTel, parentTel, telephoneNumber, homeTel]);

  return (
    <S.InformationLine width={1220}>
      <S.InformationLineTitle>
        <span>{inputName === 'homeTel' ? '' : '*'}</span>
        {title}
      </S.InformationLineTitle>
      {phoneNumberInput}
      <S.Explain>
        <span>*</span>
        {EXPLAIN}
      </S.Explain>
    </S.InformationLine>
  );
};

export default PhoneNumberColumn;
