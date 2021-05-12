import React, { FC } from 'react';
import * as S from './style';
import {
  left_arrow,
  left_arrow_disabled,
  right_arrow,
  right_arrow_disabled,
} from '../../../assets/default';

interface Props {
  content: String;
  disabled?: boolean;
}

const PageBtn: FC<Props> = ({ content, disabled }) => {
  return (
    <S.PageBtn disabled={disabled}>
      {content === '이전' && disabled && <img src={left_arrow_disabled} />}
      {content === '이전' && !disabled && <img src={left_arrow} />}
      <div>{content}</div>
      {content === '다음' && disabled && <img src={right_arrow_disabled} />}
      {content === '다음' && !disabled && <img src={right_arrow} />}
    </S.PageBtn>
  );
};

export default PageBtn;
