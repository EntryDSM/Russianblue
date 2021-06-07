import React from 'react';
import { useInformation } from '../../util/hooks/information';
import Information from '../../components/information';

const InformationContainer = () => {
  const { state, setState } = useInformation();
  return <Information {...state} {...setState} />;
};

export default InformationContainer;
