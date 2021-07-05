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
  pictureUrl: string;
  photoFileName: string;
  setImageUrl: (payload: string) => void;
  setUserPicture: (payload: File) => void;
}

const PictureBtn: FC<Props> = ({
  setImageUrl,
  setUserPicture,
  pictureUrl,
  width,
  height,
  paddingTop,
  paddingSide,
  top,
  photoFileName,
}) => {
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let filedes = URL.createObjectURL(e.target.files[0]);
    setUserPicture(e.target.files[0]);
    setImageUrl(filedes);
  };

  const picture = useMemo(() => {
    if (photoFileName) {
      if (pictureUrl) {
        return <S.Picture src={pictureUrl} />;
      } else return <S.Picture src={photoFileName} />;
    } else if (pictureUrl) return <S.Picture src={pictureUrl} />;
    else
      return (
        <>
          <img src={imgIcon} />
          <p>{IMG_EXPLAIN}</p>
          <p>{IMG_FORMATS}</p>
        </>
      );
  }, [pictureUrl, photoFileName]);

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
