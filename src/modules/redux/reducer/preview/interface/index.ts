import { error } from '../../../../../models/error';

interface PreviewState {
  preview: string;
  error: error;
  isSuccessSaveFinal: boolean | undefined;
  finalPdf: Blob;
}

export default PreviewState;
