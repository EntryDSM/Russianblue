import React, { FC } from 'react';
import MainDummyData from '../../util/util/loadingDummyData/MainDummyData';
import Main from '../../components/main';
import { useProcess } from '../../util/hooks/main';
import { useAuth } from '../../util/hooks/auth';

const MainContainer: FC = () => {
  const processState = useProcess();
  const authState = useAuth();
  const getNowProcess = status => {
    if (!processState.state.processes[status]) return MainDummyData;
    return processState.state.processes[status];
  };
  return (
    <Main
      status={processState.state.status}
      process={getNowProcess(processState.state.status)}
      {...authState.state}
    />
  );
};

export default MainContainer;
