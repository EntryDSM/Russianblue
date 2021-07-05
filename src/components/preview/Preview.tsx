import React, { FC } from 'react';
import * as S from './style';
import { SCHOOL, SELFINTRODUCTION } from '../../constance/preview';
import Pagination from '../default/Pagination';

interface Props {
  preview: string;
  setPreview: (payload: string) => void;
}

const Preview: FC<Props> = ({ preview, setPreview }) => {
  return (
    <S.Preview>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{SELFINTRODUCTION}</S.Title>
      </div>
      <S.PreviewIframe src={preview} />
      <Pagination />
    </S.Preview>
  );
};

export default Preview;
