import { Request, Response } from 'express';
import { CustomErrorBase } from '../../../domain/error/custom-error-base';
import { Uow } from '../../../domain/unit-of-work/uow';
import { queryRunner } from '../../database/typeorm/connection';

export async function GlobalFilterError(
  error,
  req: Request,
  res: Response,
  next,
) {
  console.log(error);
  // check if there is an open database transaction
  if (queryRunner.isTransactionActive) {
    await Uow.rollback();
  }
  if (error instanceof CustomErrorBase) {
    res.status(error.status).json({
      error: true,
      message: error.message,
      data: error.value ?? null,
    });
  } else {
    res.status(500).json({
      error: true,
      message: 'Internal server error.',
    });
  }
}
