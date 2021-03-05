import React, { FC, useEffect } from 'react';
import MainDummyData from '../../util/util/loadingDummyData/MainDummyData';
import Main from '../../components/main';
import { useProcess } from '../../util/hooks/main';
import { useAuth } from '../../util/hooks/auth';
import { processTimeType } from 'src/modules/redux/reducer/status/interface';

const MainContainer: FC = () => {
  const processState = useProcess();
  const authState = useAuth();
  const getNowProcess = status => {
    if (!processState.state.processes[status]) return MainDummyData;
    return processState.state.processes[status];
  };
  useEffect(() => {
    // server request로 대체 예정
    processState.setState.setStatusSuccess([
      {
        year: '2022',
        type: 'START_DATE',
        date: '2022-10-31',
      },
      {
        year: '2022',
        type: 'END_DATE',
        date: '2022-10-31',
      },
      {
        year: '2022',
        type: 'FIRST_ANNOUNCEMENT',
        date: '2022-10-31',
      },
      {
        year: '2022',
        type: 'SECOND_ANNOUNCEMENT',
        date: '2022-10-31',
      },
      {
        year: '2022',
        type: 'INTERVIEW',
        date: '2022-10-31',
      },
    ]);
  }, []);
  const status = processState.state.status;
  const date = processState.state.date;
  const getNowProcessDate = (status): string => {
    const result = date.filter(date => status === date.type)[0];
    return result ? result.date : '';
  };
  return (
    <Main
      status={status}
      date={getNowProcessDate(status)}
      process={getNowProcess(processState.state.status)}
      {...authState.state}
    />
  );
};

export default MainContainer;
