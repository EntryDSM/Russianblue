import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { EXPLAIN } from '../../../constance/information';

interface Props {
  title: string;
  name: string;
}

const PhoneNumberColumn: FC<Props> = ({ title, name }) => {
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
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
