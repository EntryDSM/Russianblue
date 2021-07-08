import { error } from 'src/models/error';

interface IAuthState {
  accessToken: string;
  isLogin: boolean;
  error: error;
}

export default IAuthState;
