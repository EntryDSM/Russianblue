import React, { FC, Suspense } from 'react';
import useSignup from '../../util/hooks/signup/useSignUp';
// import SignUp from '../../components/signup';
const SignUp = React.lazy(() => import('../../components/signup'));

const SignUpContainer: FC = () => {
  const { state, setState } = useSignup();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUp {...state} {...setState} />;
    </Suspense>
  );
};

export default SignUpContainer;
