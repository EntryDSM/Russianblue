import React, { Dispatch, FC, useMemo } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active, dropdown_disabled } from '../../../assets/selectType';
import { SOCIAL } from '../../../constance/SelectType';

interface Props {
  socialType: string;
  disabled: string;
  setDisabled: Dispatch<React.SetStateAction<string>>;
  setSocialType: (payload: string) => void;
  setRemark: (payload: string) => void;
}

const TypeSelect: FC<Props> = ({ socialType, setSocialType, disabled, setDisabled, setRemark }) => {
  const onSelectClick = () => {
    if (disabled === 'normal') {
      setDisabled('enabled');
    } else if (disabled === 'enabled') {
      setDisabled('normal');
    }
  };

  const onSocialTypeClick = e => {
    switch (e.target.innerText) {
      case '기초생활수급자':
        setSocialType('기초생활수급자');
        setRemark('BASIC_LIVING');
        break;
      case '한부모가족':
        setSocialType('한부모가족');
        setRemark('ONE_PARENT');
        break;
      case '차상위계층':
        setSocialType('차상위계층');
        setRemark('LOWEST_INCOME');
        break;
      case '소년소녀가장':
        setSocialType('소년소녀가장');
        setRemark('TEEN_HOUSEHOLDER');
        break;
      case '북한이탈주민':
        setSocialType('북한이탈주민');
        setRemark('FROM_NORTH');
        break;
      case '다문화가정':
        setSocialType('다문화가정');
        setRemark('MULTICULTURA');
        break;
    }
  };

  const dropDown = useMemo(() => {
    if (disabled === 'disabled') {
      return <img src={dropdown_disabled} />;
    } else if (disabled === 'normal') {
      return <img src={dropdown} />;
    } else {
      return <img src={dropdown_active} />;
    }
  }, [disabled]);

  return (
    <S.Select width={167} disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent width={135}>
        <p>{socialType}</p>
        {dropDown}
      </S.SelectContent>
      {disabled === 'enabled' && (
        <S.SubSelect>
          <S.GrayLine width={135} />
          {SOCIAL.map(data => {
            return <p onClick={onSocialTypeClick}>{data.content}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default TypeSelect;
