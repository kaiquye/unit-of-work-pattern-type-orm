import { Request, Response } from 'express';
import { DtoAdapter } from '../../../domain/adapters/dto-adapter';

export function DtoValidatorMiddleware(
  dtoEntity: DtoAdapter | any,
  status: 'BODY' | 'PARAMS',
) {
  return async function (req: Request, res: Response, next) {
    try {
      let dto;
      let error;

      switch (status) {
        case 'BODY':
          dto = new dtoEntity({ ...req.body });
          error = await dto.isValid();
          break;
        case 'PARAMS':
          dto = new dtoEntity({ ...req.params });
          error = await dto.isValid();
          break;
      }
      if (error === undefined) {
        next();
      }
    } catch (bodyReceivedNotCompatible) {
      return res.status(400).json(bodyReceivedNotCompatible);
    }
  };
}
