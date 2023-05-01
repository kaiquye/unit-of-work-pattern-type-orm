import {
  IsIn,
  IsNotEmpty,
  IsString,
  IsUUID,
  validateOrReject,
} from 'class-validator';
import { DtoAdapter } from '../../../domain/adapters/dto-adapter';

export class UuidIsValid extends DtoAdapter {
  @IsUUID()
  created_by: string;

  constructor({ created_by }) {
    super();
    this.created_by = created_by;
  }
  public async isValid() {
    await validateOrReject(this);
  }
}

export class CreateManagerDto extends DtoAdapter {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsIn(['PF', 'PJ'])
  @IsNotEmpty()
  document_type: string;

  @IsUUID()
  @IsNotEmpty()
  team_id: string;

  constructor({ name, email, password, document, document_type, team_id }) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;
    this.document = document;
    this.document_type = document_type;
    this.team_id = team_id;
  }

  public async isValid() {
    await validateOrReject(this);
  }
}
