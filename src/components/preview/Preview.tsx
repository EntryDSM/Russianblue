import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import { SCHOOL, SELFINTRODUCTION } from '../../constance/preview';
import Pagination from '../default/Pagination';
import PrecautionModal from '../modal/preview/PrecautionModal';
import ConfirmSubmissionModal from '../modal/preview/ConfirmSubmissionModal';
import AllPages from './AllPages';

interface Props {
  preview: string;
}

const Preview: FC<Props> = ({ preview }) => {
  const [isOpenPrecautionModal, setIsOpenPrecautionMoal] = useState(true);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);

  return (
    <S.Preview>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{SELFINTRODUCTION}</S.Title>
      </div>
      <S.PdfHeader>입학원서 미리보기</S.PdfHeader>
      <S.PdfBox>
        <S.Pdf>
          <AllPages pdf={preview} />
        </S.Pdf>
      </S.PdfBox>
      <Pagination
        prevPagePath={'/introduction'}
        nextPagePath={'/'}
        isNextPage
        setIsOpenSubmitModal={setIsOpenSubmitModal}
      />
      {isOpenPrecautionModal && (
        <PrecautionModal setIsOpenPrecautionMoal={setIsOpenPrecautionMoal} />
      )}
      {isOpenSubmitModal && <ConfirmSubmissionModal setIsOpenSubmitModal={setIsOpenSubmitModal} />}
    </S.Preview>
  );
};

export default Preview;
