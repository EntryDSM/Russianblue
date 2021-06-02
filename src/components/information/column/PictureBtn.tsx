import React from 'react';
import * as S from '../style';
import { IMG_EXPLAIN, IMG_FORMATS } from '../../../constance/information';
import { imgIcon } from '../../../assets/Information';

const PictureBtn = () => {
  return (
    <>
      <S.PictureBtn width={317} height={363} htmlFor='img'>
        <img src={imgIcon} />
        <p>{IMG_EXPLAIN}</p>
        <p>{IMG_FORMATS}</p>
      </S.PictureBtn>
      <input
        type='file'
        accept='.jpg, .jpge, .jpg2000, .png'
        id='img'
        style={{ display: 'none' }}
      />
    </>
  );
};

export default PictureBtn;
