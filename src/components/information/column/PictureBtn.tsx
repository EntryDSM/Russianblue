import React, { FC, useMemo } from 'react';
import * as S from '../style';
import { IMG_EXPLAIN, IMG_FORMATS } from '../../../constance/information';
import { imgIcon } from '../../../assets/Information';

interface Props {
  width: number;
  height: number;
  paddingTop: number;
  paddingSide: number;
  top: number;
  imageUrl: string;
  imageFile: File;
  setImageUrl: (payload: string) => void;
  setImageFile: (payload: File) => void;
  informationImage: (payload: File) => void;
}

const PictureBtn: FC<Props> = ({
  setImageFile,
  setImageUrl,
  imageUrl,
  width,
  height,
  paddingTop,
  paddingSide,
  top,
  informationImage,
}) => {
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files[0]);
    let filedes = URL.createObjectURL(e.target.files[0]);
    setImageUrl(filedes);
    informationImage(e.target.files[0]);
  };

  const picture = useMemo(() => {
    if (imageUrl) return <S.Picture src={imageUrl} />;
    else
      return (
        <>
          <img src={imgIcon} />
          <p>{IMG_EXPLAIN}</p>
          <p>{IMG_FORMATS}</p>
        </>
      );
  }, [imageUrl]);

  return (
    <>
      <S.PictureBtn
        width={width}
        height={height}
        paddingTop={paddingTop}
        paddingSide={paddingSide}
        top={top}
        htmlFor='img'
      >
        {picture}
      </S.PictureBtn>
      <input
        type='file'
        accept='.jpg, .jpge, .jpg2000, .png'
        id='img'
        style={{ display: 'none' }}
        onChange={fileChangeHandler}
      />
    </>
  );
};

export default PictureBtn;
