import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { XBtn, search } from '../../../assets/modal';
import { schoolArrayType, searchSchoolQueryType } from 'src/constance/information';

interface Props {
  content: Array<schoolArrayType>;
  totalPages: number;
  searchSchool: (payload: searchSchoolQueryType) => void;
  setSchoolCode: (payload: string) => void;
  setSchoolName: (payload: string) => void;
  setIsClickSearchBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSchoolModal: FC<Props> = ({
  content,
  totalPages,
  searchSchool,
  setSchoolCode,
  setSchoolName,
  setIsClickSearchBtn,
}) => {
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const closeBtnClickHandelr = () => {
    setIsClickSearchBtn(false);
  };

  const searchBtnClickHandler = () => {
    searchSchool({ name: searchText, size: 10, page: 0 });
  };

  const schoolNameClickHandler = e => {
    setSchoolName(e.target.innerText);
    setSchoolCode(e.target.dataset.id);
    setIsClickSearchBtn(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchSchool({ name: searchText, size: 10, page: 0 });
    }
  };

  const _infiniteScroll = () => {
    let scrollHeight = document.querySelector('.contentBox').scrollHeight;
    let scrollTop = document.querySelector('.contentBox').scrollTop;
    let clientHeight = document.querySelector('.contentBox').clientHeight;

    if (scrollTop > 0 && scrollTop + clientHeight >= scrollHeight) {
      if (page + 1 <= totalPages) {
        setPage(prevPage => prevPage + 1);
      } else return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', _infiniteScroll, true);
    };
  }, []);

  useEffect(() => {
    if (page !== 0) {
      searchSchool({ name: searchText, size: 10, page: page });
    }
  }, [page, content]);

  const showSchool = useMemo(() => {
    if (content) {
      return content.map(data => {
        return (
          <S.ModalSearchSchoolContentLine>
            <S.ModalSearchSchoolName data-id={data.code} onClick={schoolNameClickHandler}>
              {data.name}
            </S.ModalSearchSchoolName>
            <S.ModalSearchSchoolAddress>{data.information}</S.ModalSearchSchoolAddress>
          </S.ModalSearchSchoolContentLine>
        );
      });
    }
  }, [content]);

  return (
    <S.ModalSearchSchoolWrapper>
      <S.ModalSearchSchool>
        <S.ModalSearchSchoolX src={XBtn} onClick={closeBtnClickHandelr} />
        <S.ModalSearchSchoolTitle>학교 검색</S.ModalSearchSchoolTitle>
        <S.ModalSearchSChoolInputDiv>
          <S.ModalSearchSchoolInput
            onChange={inputChangeHandler}
            placeholder={'학교명을 입력해주세요'}
            onKeyDown={onKeyDown}
          />
          <S.ModalSearchSchoolSearchBtn src={search} onClick={searchBtnClickHandler} />
        </S.ModalSearchSChoolInputDiv>
        <S.ModalSearchSchoolContentBox className='contentBox'>
          {showSchool}
        </S.ModalSearchSchoolContentBox>
      </S.ModalSearchSchool>
    </S.ModalSearchSchoolWrapper>
  );
};

export default SearchSchoolModal;
