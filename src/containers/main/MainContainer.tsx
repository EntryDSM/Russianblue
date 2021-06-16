import React, { FC, Suspense, useEffect } from 'react';
import MainDummyData from '../../util/util/loadingDummyData/MainDummyData';
import { useProcess } from '../../util/hooks/main';
import { useAuth } from '../../util/hooks/auth';
import { useModal } from './../../util/hooks/modal';
// import Main from '../../components/main';
const Main = React.lazy(() => import('../../components/main'));

const MainContainer: FC = () => {
  const processState = useProcess();
  const authState = useAuth();
  const modalState = useModal();
  const getNowProcess = (status: string) => {
    if (!processState.state.processes[status]) return MainDummyData;
    return processState.state.processes[status];
  };
  const defaultMainButtonClickHandler = () => {
    modalState.setState.setModalOn('signin');
  };
  useEffect(() => {
    // server request로 대체 예정
  }, []);
  const status = processState.state.status;
  const date = processState.state.date;
  const getNowProcessDate = (status: string): string => {
    console.log(status, date);
    const result = date.filter(date => status === date.type)[0];
    console.log(result);
    return result ? result.date : '';
  };
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
