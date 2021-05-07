import React, { FC } from 'react';
import * as S from './style';
import PageBtn from './PageBtn';

interface Props {
  nowPage: Array<boolean>;
}

const Pagination: FC<Props> = ({ nowPage }) => {
  return (
    <S.Page>
      <PageBtn content='이전' />
      <S.PageMoving>
        {nowPage.map(boolean => {
          return <S.Circle nowPage={boolean} />;
        })}
      </S.PageMoving>
      <PageBtn content='다음' disabled />
    </S.Page>
  );
};

export default Pagination;
