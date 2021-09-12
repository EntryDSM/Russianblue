import React, { useEffect } from 'react';
import { useAuth } from '../../util/hooks/auth';
import { useSignIn } from '../../util/hooks/signin';
import Header from '../../components/header';
import { useUser } from '../../util/hooks/user';
import { useHistory } from 'react-router-dom';
import { REFRESH_TOKEN } from '../../modules/redux/action/signin';

const HeaderContainer = () => {
  const authState = useAuth();
  const userState = useUser();
  const signinState = useSignIn();
  const history = useHistory();

  const refreshToken = () => {
    signinState.setState.refreshToken(userState.setState.getUser);
  };

  useEffect(() => {
    if (signinState.state.error.status === 401 && signinState.state.error.type === REFRESH_TOKEN) {
      authState.setState.setAccessToken('');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  }, [signinState.state.error]);

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
