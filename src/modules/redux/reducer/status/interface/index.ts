import { statusType } from '../mainConstance';

interface IStatusState {
  status: statusType;
  isEnd: boolean;
  isStart: boolean;
  processes: Object;
  date: Array<processTimeType>;
  error: number;
}

export interface processTimeType {
  type: string;
  year: string;
  date: string;
}

export interface processType {
  title: React.ReactNode;
  getDescription: (value?: string) => React.ReactNode;
  isHaveTerm: boolean;
  buttonText: string;
  isButtonAble: boolean;
  uri: string;
}

export default IStatusState;
