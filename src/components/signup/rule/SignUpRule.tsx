import React, { FC } from 'react';
import * as S from '../style';
import SignUpRuleCheckbox from './SignUpRuleCheckbox';

const SignUpRule: FC = () => {
  return (
    <>
      <S.SignUpRuleWrapper>
        <S.SignUpRule>
          <pre>
            본 입학원서에 기재된 지원자의 개인정보는 신입생 입학관리업무의 원활한 수행을 위하여
            개인정보의 수집‧유출‧오용‧남용으로부터 사생활의 비밀 등을 보호하도록 한{'\n'}
            개인정보보호법규정에 따라 다음과 같이 수집‧이용‧제공됩니다.{' '}
          </pre>
          <h4>1. (개인정보 처리의 법령상 근거) </h4>
          <pre>
            {' '}
            본 입학원서에 기재된 개인정보의 처리업무는 초‧중등교육법 제47조 및 동법 시행령 제81조,
            제82조, 제84조, 제98조 및 본교의 입학전형 실시계획 등에 근거하고{'\n'}
            있습니다.
          </pre>
          <h4>2. (정보주체의 권리) </h4>
          <pre>
            {' '}
            지원자는 자신이 제공한 개인정보에 대하여 개인정보 보호법 제4조 및 제35조부터
            제38조까지에 따라 열람‧처리‧정지‧정정‧삭제‧파기 등을 요구할 수 있으며, 개인정보{'\n'}
            보호법을 위반한 행위로 인한 손해 발생시에는 개인정보 보호법 제39조에 따라 손해배상을
            청구할 수 있습니다
          </pre>
        </S.SignUpRule>
      </S.SignUpRuleWrapper>
      <SignUpRuleCheckbox />
    </>
  );
};
export default SignUpRule;
