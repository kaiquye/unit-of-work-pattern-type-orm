import { validateOrReject } from 'class-validator';

export abstract class DtoAdapter {
  async isValid() {
    return validateOrReject(this);
  }
}
