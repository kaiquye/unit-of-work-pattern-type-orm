import { CustomErrorBase } from '../../../domain/error/custom-error-base';
import { EStatusCode } from '../../../domain/enums/status-code-enums';

export class EmailAlreadyRegisteredError extends CustomErrorBase {
  constructor(
    message = 'Error: The email provided is already registered in our system.',
  ) {
    super(message, EStatusCode.NotFound);
  }
}
