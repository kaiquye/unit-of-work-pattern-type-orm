import { CustomErrorBase } from '../../../domain/error/custom-error-base';
import { EStatusCode } from '../../../domain/enums/status-code-enums';

export class TeamNotFoundError extends CustomErrorBase {
  constructor(message = 'Error: The informed team does not exist.') {
    super(message, EStatusCode.NotFound);
  }
}
