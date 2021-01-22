import React from 'react';
import * as S from '../style';

const SignUpRuleCheckbox = () => {
  return (
    <S.SignUpCheckboxWrapper>
      <S.SignUpCheckbox>
        <input type='checkbox' />
        <div />
        <p>개인정보 이용약관를 확인했으며, 이에 동의합니다.</p>
      </S.SignUpCheckbox>
    </S.SignUpCheckboxWrapper>
  );
};

export default SignUpRuleCheckbox;
