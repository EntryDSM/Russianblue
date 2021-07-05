import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import PageBtn from './PageBtn';
import { useLocation } from 'react-router-dom';

interface Props {
  isQualification?: boolean;
  prevPagePath?: string;
  nextPagePath?: string;
  isNextPage?: boolean;
  setIsOpenSubmitModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pagination: FC<Props> = ({
  isNextPage,
  isQualification,
  prevPagePath,
  nextPagePath,
  setIsOpenSubmitModal,
}) => {
  const pathname = useLocation().pathname.slice(1);
  const [nowPage, setNowPage] = useState({
    'select-type': false,
    information: false,
    grade: false,
    introduction: false,
    preview: false,
  });

  useEffect(() => {
    setNowPage({ ...nowPage, [pathname]: true });
  }, [pathname]);

  const showNowPage = useMemo(() => {
    if (isQualification) {
      const pageArray = ['select-type', 'information', 'introduction', 'preview'];
      return pageArray.map(page => {
        return <S.Circle nowPage={nowPage[page]} />;
      });
    } else {
      const pageArray = ['select-type', 'information', 'grade', 'introduction', 'preview'];
      return pageArray.map(page => {
        return <S.Circle nowPage={nowPage[page]} />;
      });
    }
  }, [isQualification, nowPage]);

  const goToNextPage = useMemo(() => {
    if (isNextPage)
      return (
        <PageBtn
          content='다음'
          nextPagePath={nextPagePath}
          setIsOpenSubmitModal={setIsOpenSubmitModal}
        />
      );
    else return <PageBtn content='다음' disabled />;
  }, [isNextPage]);

  return (
    <S.Page>
      <PageBtn content='이전' prevPagePath={prevPagePath} />
      <S.PageMoving>{showNowPage}</S.PageMoving>
      {goToNextPage}
    </S.Page>
  );
};

export default Pagination;
