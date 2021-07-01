import React, { FC } from 'react';
import { isOneOfTextEmpty } from '../../../../util/util';
import * as S from '../../style';

interface Props {
  text: string;
  description?: string;
}

const SignUpColumn: FC<Props> = ({ children, text, description }) => {
  return (
    <S.SignUpItem>
      <div>
        <div>
          <S.SignUpItemText>{text}</S.SignUpItemText>
          {children}
        </div>
        {description ? (
          <p>
            <span>*</span>
            {description}
          </p>
        ) : (
          ''
        )}
      </div>
    </S.SignUpItem>
  );
};

export default SignUpColumn;
