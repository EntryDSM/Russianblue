import React, { FC } from 'react';
import { FooterButton } from './style';

interface Props {
  link: string;
}

const FooterLink: FC<Props> = ({ link, children }) => {
  const redirectToLink = (link: string) => {
    window.open(link, '_blank');
  };
  const clickHandler = (link: string) => {
    redirectToLink(link);
  };
  return <FooterButton onClick={() => clickHandler(link)}>{children}</FooterButton>;
};

export default FooterLink;
