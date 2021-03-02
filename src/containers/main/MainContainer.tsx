import React, { FC } from 'react';
import MainDummyData from '../../util/util/loadingDummyData/MainDummyData';
import Main from '../../components/main';
import { useProcess } from '../../util/hooks/main';

const MainContainer: FC = () => {
  const { state, setState } = useProcess();
  const getNowProcess = status => {
    if (!state.processes[status]) return MainDummyData;
    return state.processes[status];
  };
  return <Main status={state.status} process={getNowProcess(state.status)} />;
};

export default MainContainer;
