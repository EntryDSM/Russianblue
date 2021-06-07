import React, { FC } from 'react';
import * as S from './style';
import PageBtn from './PageBtn';

interface Props {
  nowPage: Array<boolean>;
  isNextPage?: boolean;
}

const Pagination: FC<Props> = ({ nowPage, isNextPage }) => {
  return (
    <S.Page>
      <PageBtn content='이전' />
      <S.PageMoving>
        {nowPage.map(boolean => {
          return <S.Circle nowPage={boolean} />;
        })}
      </S.PageMoving>
      {isNextPage && <PageBtn content='다음' />}
      {!isNextPage && <PageBtn content='다음' disabled />}
    </S.Page>
  );
};

export default Pagination;
