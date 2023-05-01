import { CustomErrorBase } from '../../../domain/error/custom-error-base';
import { EStatusCode } from '../../../domain/enums/status-code-enums';

export class InformedUserIsNotAManagerError extends CustomErrorBase {
  constructor(
    message = "Error: The informed user does not have the 'generate' role. Only people with this role can create new teams.",
  ) {
    super(message, EStatusCode.NotFound);
  }
}
