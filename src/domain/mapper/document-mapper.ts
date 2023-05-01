import { Document } from '../models/document.model';

export class DocumentMapper {
  static toModel(data: Partial<Document>) {
    const doc = new Document();
    doc.document = data.document;
    doc.document_type = data.document_type;
    doc.user_id = data.user_id;
    return doc;
  }

  static toView(data: Partial<Document>) {}
}
