import { Document } from '../../../../domain/models/document.model';
import { IDocumentRepository } from './interfaces/document-repository-interface';
import { queryRunner } from '../connection';

export class DocumentRepository extends IDocumentRepository {
  save(data: Document): Promise<Document> {
    return queryRunner.manager.save(data);
  }

  findDocument(document: number): Promise<Document> {
    return this.databaseConn.findOne(Document, {
      where: {
        document,
      },
    });
  }
}
