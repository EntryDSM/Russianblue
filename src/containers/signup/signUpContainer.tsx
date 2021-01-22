import React, { FC } from 'react';
import useSignup from '../../util/hooks/useSignUp';
import SignUp from '../../components/signup';

const SignUpContainer: FC = () => {
  const { state, setState } = useSignup();
  return <SignUp {...state} {...setState} />;
};

export default SignUpContainer;
