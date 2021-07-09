import React, { useEffect } from 'react';
import { usePreview } from '../../util/hooks/preview';
import Preview from '../../components/preview';
import { useDispatch } from 'react-redux';
import { GET_PREVIEW } from '../../modules/redux/action/preview/interface';
import { useIsLogin } from '../../util/api/default';
import { useUser } from '../../util/hooks/user';
import { useHistory } from 'react-router-dom';

const PreviewContainer = () => {
  const { state, setState } = usePreview();
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const dispatch = useDispatch();
  const history = useHistory();
  useIsLogin();

  useEffect(() => {
    dispatch({ type: GET_PREVIEW });
  }, []);

  useEffect(() => {
    if (isFinalSubmitDone) history.push('/');
  }, [isFinalSubmitDone]);

  return <Preview {...state} {...setState} />;
};

export default PreviewContainer;
