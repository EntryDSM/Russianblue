import React, { FC } from 'react';
import { FooterImgButton } from './style';

interface Props {
  img: string;
  alt: string;
  link: string;
}

const FooterImgLink: FC<Props> = ({ img, alt, link }) => {
  const redirectToLink = (link: string) => {
    window.location.href = link;
  };
  const clickHandler = (link: string) => {
    redirectToLink(link);
  };
  return (
    <FooterImgButton onClick={() => clickHandler(link)}>
      <img src={img} alt={alt} />
    </FooterImgButton>
  );
};

export default FooterImgLink;
