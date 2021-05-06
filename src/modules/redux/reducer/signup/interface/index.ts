import { error } from 'src/models/error';

interface ISignUpState {
  phoneNumber: string;
  name: string;
  phoneCode: string;
  password: string;
  ruleCheck: boolean;
  checkVertifyCode: boolean;
  sendvertifyCode: boolean;
  error: error;
}

export default ISignUpState;
