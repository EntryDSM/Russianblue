import React from 'react';
import { useGrade } from '../../util/hooks/grade';
import Grade from '../../components/grade';

const GradeContainer = () => {
  const { state, setState } = useGrade();
  return <Grade {...state} {...setState} />;
};

export default GradeContainer;
