import React, { Dispatch, FC, useEffect, useState } from 'react';
import * as S from '../style';
import { GRADUATION } from '../../../constance/SelectType';

interface Props {
  setIsProspective: Dispatch<React.SetStateAction<boolean>>;
  setGraduation: (payload: string) => void;
  educationalStatus: string;
}

const isCheckInit = {
  prospective: false,
  graduate: false,
  qualification: false,
};

const ChooseGraduation: FC<Props> = ({ setIsProspective, setGraduation, educationalStatus }) => {
  const [isCheck, setIsCheck] = useState(isCheckInit);
  useEffect(() => {
    switch (educationalStatus) {
      case 'PROSPECTIVE_GRADUATE':
        setIsCheck({ ...isCheckInit, prospective: true });
        setIsProspective(true);
        break;
      case 'GRADUATE':
        setIsCheck({ ...isCheckInit, graduate: true });
        setIsProspective(false);
        break;
      case 'QUALIFICATION_EXAM':
        setIsCheck({ ...isCheckInit, qualification: true });
        setIsProspective(false);
        break;
      default:
        setIsCheck(isCheckInit);
        break;
    }
  }, [educationalStatus]);

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'prospective':
        setIsCheck({ ...isCheckInit, prospective: true });
        setIsProspective(true);
        setGraduation('PROSPECTIVE_GRADUATE');
        break;
      case 'graduate':
        setIsCheck({ ...isCheckInit, graduate: true });
        setIsProspective(false);
        setGraduation('GRADUATE');
        break;
      case 'qualification':
        setIsCheck({ ...isCheckInit, qualification: true });
        setIsProspective(false);
        setGraduation('QUALIFICATION_EXAM');
        break;
    }
  };

  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>졸업 구분
      </S.LineTitle>
      {GRADUATION.map(data => {
        return (
          <S.SelectBox margin={65} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p>{data.content}</p>
          </S.SelectBox>
        );
      })}
    </S.Line>
  );
};

export default ChooseGraduation;
