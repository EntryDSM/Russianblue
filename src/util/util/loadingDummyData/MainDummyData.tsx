import React from 'react';
import { processType } from 'src/modules/redux/reducer/status/interface';

const MainDummyData: processType = {
  title: <p>로딩중...</p>,
  getDescription: () => <p>로딩중...</p>,
  isHaveTerm: false,
  isButtonAble: false,
  buttonText: '로딩중...',
};

export default MainDummyData;
