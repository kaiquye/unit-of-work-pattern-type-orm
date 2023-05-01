import {
  IsNotEmpty,
  IsString,
  IsUUID,
  validateOrReject,
} from 'class-validator';
import { DtoAdapter } from '../../../domain/adapters/dto-adapter';

export class CreateTeamDto extends DtoAdapter {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  @IsNotEmpty()
  created_by: string;

  constructor({ name, created_by }) {
    super();
    this.name = name;
    this.created_by = created_by;
  }

  public async isValid() {
    await validateOrReject(this);
  }
}
