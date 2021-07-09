import React, { useEffect } from 'react';
import { usePreview } from '../../util/hooks/preview';
import Preview from '../../components/preview';
import { useDispatch } from 'react-redux';
import { GET_PREVIEW } from '../../modules/redux/action/preview/interface';
import { useIsLogin } from '../../util/api/default';

const PreviewContainer = () => {
  const { state, setState } = usePreview();
  const dispatch = useDispatch();
  useIsLogin();
  useEffect(() => {
    dispatch({ type: GET_PREVIEW });
  }, []);

  return <Preview {...state} {...setState} />;
};

export default PreviewContainer;
