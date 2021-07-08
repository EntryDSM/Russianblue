import React, { useEffect } from 'react';
import { useAuth } from '../../util/hooks/auth';
import { useSignIn } from '../../util/hooks/signin';
import Header from '../../components/header';
import { useUser } from '../../util/hooks/user';
import { useHistory } from 'react-router-dom';

const HeaderContainer = () => {
  const authState = useAuth();
  const userState = useUser();
  const signinState = useSignIn();
  const history = useHistory();

  const refreshToken = () => {
    console.log('refreshToken');
    signinState.setState.refreshToken(userState.setState.getUser);
  };

  useEffect(() => {
    const errorStatus = userState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [userState.state.error]);

  useEffect(() => {
    if (authState.state.isLogin) userState.setState.getUser();
  }, [authState.state.isLogin, history.location.pathname]);
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
