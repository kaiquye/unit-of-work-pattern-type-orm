import { UseCaseAdapter } from '../../domain/adapters/use-case-adapter';
import { User } from '../../domain/models/user.model';
import { inject, injectable } from 'tsyringe';
import { ICreateDocumentIn } from './interfaces/use-case-interfaces';
import { Document } from '../../domain/models/document.model';
import { DocumetInvalidError } from './error/documet-invalid-error';
import { IDocumentRepository } from '../../infra/database/typeorm/repositories/interfaces/document-repository-interface';
import { DocumentMapper } from '../../domain/mapper/document-mapper';
import { IUserRepository } from '../../infra/database/typeorm/repositories/interfaces/user-repository-interface';

@injectable()
export class CreateDocumentUseCase extends UseCaseAdapter<
  ICreateDocumentIn,
  Promise<Document>
> {
  constructor(
    @inject('document-repository')
    private readonly docRep: IDocumentRepository,
    @inject('user-repository')
    private readonly useRep: IUserRepository,
  ) {
    super();
  }
  async execute(data: ICreateDocumentIn): Promise<Document> {
    let document = data.document;
    let digitCalculation = 0;
    for (let i = 0; i <= 8; i++) {
      digitCalculation += Number(data.document[i]) * (10 - i);
    }
    let rest = (digitCalculation * 10) % 11;

    if (rest !== parseInt(document.substring(9, 10))) {
      console.log('invalid document ! ');
      throw new DocumetInvalidError();
    }
    let digitCalculation2 = 0;
    for (let i = 0; i <= 9; i++) {
      digitCalculation2 += Number(data.document[i]) * (11 - i);
    }
    let rest2 = (digitCalculation2 * 10) % 11;
    if (rest2 != parseInt(document.substring(10, 11))) {
      console.log('invalid document ! ');
      throw new DocumetInvalidError();
    }
    const docMapper = DocumentMapper.toModel(data);
    return this.docRep.save(docMapper);
  }
}
