import { Document } from '../../../../../domain/models/document.model';
import { RepositoryBase } from './repository-base';

export abstract class IDocumentRepository extends RepositoryBase {
  abstract save(data: Document): Promise<Document>;
  abstract findDocument(document: number): Promise<Document>;
}
