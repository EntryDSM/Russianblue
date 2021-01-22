import React from 'react';

const mainConstance = {
  test: {
    getTitle: () => <p>지금은 {<span>원서 작성</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>원서접수 기간은 {<span>{date}</span>}까지 입니다</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
  },
};

export default mainConstance;
