import { error } from '../../../../../models/error';

interface PreviewState {
  preview: string;
  error: error;
  isSuccessSaveFinal: boolean | undefined;
}

export default PreviewState;
