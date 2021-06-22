import React, { useEffect } from 'react';
import { useAuth } from '../../util/hooks/auth';
import Header from '../../components/header';
import { useUser } from '../../util/hooks/user';

const HeaderContainer = () => {
  const authState = useAuth();
  const userState = useUser();

  useEffect(() => {
    if (authState.state.isLogin) userState.setState.getUser();
  }, [authState.state.isLogin]);
  return (
    <Header
      {...authState.state}
      {...authState.setState}
      {...userState.state}
      {...userState.setState}
    />
  );
};

export default HeaderContainer;
