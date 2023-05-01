import { CustomErrorBase } from '../../../domain/error/custom-error-base';
import { EStatusCode } from '../../../domain/enums/status-code-enums';

export class DocumetInvalidError extends CustomErrorBase {
  constructor(message = 'Error: The document entered is not valid.') {
    super(message, EStatusCode.NotFound);
  }
}
