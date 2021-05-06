import React, { FC, Suspense, useEffect } from 'react';
import useIntroduction from '../../util/hooks/Introduction';

const Introduction = React.lazy(() => import('../../components/introduction'));

const IntroductionContainer: FC = () => {
  const { state, setState } = useIntroduction();
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Introduction {...state} {...setState} />
    </Suspense>
  );
};

export default IntroductionContainer;
