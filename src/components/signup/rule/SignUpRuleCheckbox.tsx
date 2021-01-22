import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  ruleCheck: boolean;
  setRuleCheck: (payload: boolean) => void;
}

const SignUpRuleCheckbox: FC<Props> = ({ ruleCheck, setRuleCheck }) => {
  const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setRuleCheck(value);
  };
  return (
    <S.SignUpCheckboxWrapper>
      <S.SignUpCheckbox>
        <input type='checkbox' onChange={checkboxChangeHandler} checked={ruleCheck} />
        <div />
        <p>개인정보 이용약관를 확인했으며, 이에 동의합니다.</p>
      </S.SignUpCheckbox>
    </S.SignUpCheckboxWrapper>
  );
};

export default SignUpRuleCheckbox;
