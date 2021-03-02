import Checkbox from '../../default/checkbox';
import React, { FC, useState } from 'react';
import * as S from '../style';

const IS_BEFORE_AGREE_NAME = 'agree';

interface Props {
  deleteModal: () => void;
}

const NoticeModal: FC<Props> = ({ deleteModal }) => {
  const [agree, setAgree] = useState<boolean>(false);
  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };
  const buttonClickHandler = () => {
    if (agree) {
      deleteModal();
      setIsAgreeBefore(true);
    }
  };
  const setIsAgreeBefore = (value: boolean) => {
    localStorage.setItem(IS_BEFORE_AGREE_NAME, value ? 'true' : 'false');
  };
  return (
    <S.ModalWrapper>
      <S.ModalNotice>
        <S.ModalNoticeTitle>원서 접수 시 유의사항</S.ModalNoticeTitle>
        <S.ModalNoticeSubTitle>전형 선택</S.ModalNoticeSubTitle>
        <S.ModalNoticeText>
          1. 졸업 구분 중, 졸업자는 졸업 연도와 월을 확실하게 선택해 주시고. 검정고시 합격자는 합격
          연도와 월을 확실하게 선택해 주세요.
        </S.ModalNoticeText>
        <S.ModalNoticeText>2. 특기 사항은 1가지만 체크할 수 있습니다.</S.ModalNoticeText>
        <S.ModalNoticeText>
          3. 사회 통합 전형일 경우에 전형을 확실하게 선택해 주세요.
        </S.ModalNoticeText>
        <S.ModalNoticeSubTitle>정보 입력</S.ModalNoticeSubTitle>
        <S.ModalNoticeText>
          1. 검정고시 합격자와 졸업예정자 및 졸업자의 화면이 다릅니다. 검정고시 합격자이신 경우,
          학교 입력창이 있으면 전형 선택을 다시한번 확인해 주세요.
        </S.ModalNoticeText>
        <S.ModalNoticeText>
          2. 이미지를 삽입하실 때, 올바른 확장자를 가진 파일만 넣어주세요.
        </S.ModalNoticeText>
        <S.ModalNoticeText>
          3. 주소 입력 시, 완벽한 도로명 주소를 입력하셔야 검색이 됩니다. 이점 유의하여 주세요.
        </S.ModalNoticeText>
        <S.ModalNoticeText>
          4. 전화번호 입력 시 -를 넣지 않고 숫자만 입력하시길 바랍니다.
        </S.ModalNoticeText>
        <S.ModalNoticeText>
          5. 자동저장은 입력하고 3초동안 변화가 없으면 저장됩니다.
        </S.ModalNoticeText>
        <S.ModalNoticeSubTitle>성적 입력</S.ModalNoticeSubTitle>
        <S.ModalNoticeText>
          1. 학교에서 배우지 않거나, 그 학기에 배우지 않은 과목은 x 로 하시면 됩니다.
        </S.ModalNoticeText>
        <S.ModalNoticeText>2. 성적 입력 실수에 대한 책임은 작성자에게 있습니다.</S.ModalNoticeText>
        <S.ModalNoticeText>
          3. 성적 입력 실수 후 수정은 되지만 최종 제출 후에는 수정이 불가능합니다.
        </S.ModalNoticeText>
        <S.ModalNoticeSubTitle>최종 제출 및 원서 확인</S.ModalNoticeSubTitle>
        <S.ModalNoticeText>
          1. 이전에 작성하지 않은 부분이 있거나, 잘못 체크된 부분이 있으면 제출되지 않습니다. 오류가
          발생할 경우 이전에 작성한 부분을 확인해 주세요.
        </S.ModalNoticeText>
        <S.ModalNoticeCheckboxWrapper>
          <div>
            <Checkbox checkboxChangeHandler={checkboxChangeHandler}>
              위 내용을 잘 숙지하였고, 동의합니다
            </Checkbox>
          </div>
        </S.ModalNoticeCheckboxWrapper>
        <S.ModalNoticeButtonWrapper>
          <div>
            <S.ModalDefaultButton onClick={buttonClickHandler}>확인</S.ModalDefaultButton>
          </div>
        </S.ModalNoticeButtonWrapper>
      </S.ModalNotice>
    </S.ModalWrapper>
  );
};

export default NoticeModal;
