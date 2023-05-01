import { CustomErrorBase } from '../../../domain/error/custom-error-base';
import { EStatusCode } from '../../../domain/enums/status-code-enums';

export class ManagerNotFoundError extends CustomErrorBase {
  constructor(message = 'Error: The informed ID manager does not exist.') {
    super(message, EStatusCode.NotFound);
  }
}
