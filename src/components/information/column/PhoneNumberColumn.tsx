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

  const phoneWithHyphen = number => {
    if (number) {
      if (number.substring(0, 2) === '02') {
        if (number.length === 9) return number.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
        if (number.length === 12)
          return number.replace(/-/g, '').replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      } else {
        if (number.length === 10) {
          return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }
        if (number.length === 13) {
          return number.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        }
      }
    }
  };

  const phoneNumberInput = useMemo(() => {
    let inputvalue = '';
    if (inputName === 'schoolTel') inputvalue = schoolTel;
    else if (inputName === 'parentTel') inputvalue = parentTel;
    else if (inputName === 'telephoneNumber') inputvalue = telephoneNumber;
    else if (inputName === 'homeTel') inputvalue = homeTel;
    return (
      <Input
        width={260}
        height={41}
        inputChangeHandler={phoneNumberChangeHandler}
        name={inputName}
        value={phoneWithHyphen(inputvalue)}
        maxLength={13}
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
