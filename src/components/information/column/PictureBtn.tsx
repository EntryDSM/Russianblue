import React, { FC, useMemo } from 'react';
import * as S from '../style';
import { IMG_EXPLAIN, IMG_FORMATS } from '../../../constance/information';
import { imgIcon } from '../../../assets/Information';

interface Props {
  imageUrl: string;
  setImageUrl: (payload: string) => void;
  setImageFile: (payload: File) => void;
}

const PictureBtn: FC<Props> = ({ setImageFile, setImageUrl, imageUrl }) => {
  const fileChangeHandler= (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files[0]);
    let filedes = URL.createObjectURL(e.target.files[0]);
    setImageUrl(filedes);
    console.log(e.target.files[0]);
  }

  const picture = useMemo(() => {
    if(imageUrl) return <S.Picture src={imageUrl} />;
    else return <>
      <img src={imgIcon} />
      <p>{IMG_EXPLAIN}</p>
      <p>{IMG_FORMATS}</p>
    </>;
  }, [imageUrl]);

  return (
    <>
      <S.PictureBtn width={317} height={363} htmlFor='img'>
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
