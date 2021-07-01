import React from 'react';
import { usePreview } from '../../util/hooks/preview';
import Preview from '../../components/preview';

const PreviewContainer = () => {
  const { state, setState } = usePreview();
  return <Preview {...state} {...setState} />;
};

export default PreviewContainer;
