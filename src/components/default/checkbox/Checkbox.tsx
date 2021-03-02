import React, { FC } from 'react';
import * as S from './style';

interface Props {
  checkboxChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<Props> = ({ children, checkboxChangeHandler }) => {
  return (
    <S.Checkbox>
      <p>{children}</p>
      <div>
        <input type='checkbox' onChange={checkboxChangeHandler} />
        <div />
      </div>
    </S.Checkbox>
  );
};

export default Checkbox;
