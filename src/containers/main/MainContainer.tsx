import React, { FC, Suspense, useEffect } from 'react';
import MainDummyData from '../../util/util/loadingDummyData/MainDummyData';
import { useProcess } from '../../util/hooks/main';
import { useAuth } from '../../util/hooks/auth';
import { useModal } from './../../util/hooks/modal';
import {
  BEFORE_FIRST_ANNOUNCE,
  BEFORE_INTERVIEW,
  BEFORE_SECOND_ANNOUNCE,
  FIRST_ANNOUNCE,
  INTERVIEW,
  NOT_APPLICATION_PERIOD,
  SECOND_ANNOUNCE,
  START_DATE,
  statusType,
} from '../../modules/redux/reducer/status/mainConstance';

const Main = React.lazy(() => import('../../components/main'));

const MainContainer: FC = () => {
  const processState = useProcess();
  const authState = useAuth();
  const modalState = useModal();
  const getNowProcess = (status: string) => {
    if (!processState.state.processes[status]) return MainDummyData;
    if (status === 'NOT_APPLICATION_PERIOD') return processState.state.processes[START_DATE];
    if (status === 'BEFORE_FIRST_ANNOUNCE') return processState.state.processes[FIRST_ANNOUNCE];
    if (status === 'BEFORE_SECOND_ANNOUNCE') return processState.state.processes[SECOND_ANNOUNCE];
    if (status === 'BEFORE_INTERVIEW') return processState.state.processes[INTERVIEW];
    return processState.state.processes[status];
  };

  const defaultMainButtonClickHandler = () => {
    modalState.setState.setModalOn('signin');
  };

  const status = processState.state.status;
  const dates = processState.state.date;

  const getNowProcessDate = (status: statusType): string => {
    if (status === NOT_APPLICATION_PERIOD)
      return dates.filter(date => date.type === START_DATE)[0].date;
    if (status === BEFORE_FIRST_ANNOUNCE) {
      return dates.filter(date => date.type === FIRST_ANNOUNCE)[0].date;
    }
    if (status === BEFORE_SECOND_ANNOUNCE)
      return dates.filter(date => date.type === SECOND_ANNOUNCE)[0].date;
    if (status === BEFORE_INTERVIEW) return dates.filter(date => date.type === INTERVIEW)[0].date;
    const result = dates.filter(date => {
      return status === date.type;
    })[0];
    return result ? result.date : '';
  };

  useEffect(() => {
    processState.setState.getStatus();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main
        status={status}
        date={getNowProcessDate(status)}
        process={getNowProcess(processState.state.status)}
        defaultMainButtonClickHandler={defaultMainButtonClickHandler}
        {...authState.state}
      />
    </Suspense>
  );
};

export default MainContainer;
