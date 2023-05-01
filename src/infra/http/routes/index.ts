import { Router } from 'express';
import { InterceptorAdapter } from '../../../domain/adapters/interceptor-adapter';
import { teamController } from '../controllers/team-controller';
import { DtoValidatorMiddleware } from '../middlewares/dto-validator-middleware';
import { CreateTeamDto } from '../DTOs/create-team-dto';
import { CreateManagerDto, UuidIsValid } from '../DTOs/create-manager-dto';
import { managerController } from '../controllers/manager-controller';

const AppRouter = Router();

AppRouter.post(
  '/manager/:created_by',
  DtoValidatorMiddleware(CreateManagerDto, 'BODY'),
  DtoValidatorMiddleware(UuidIsValid, 'PARAMS'),
  InterceptorAdapter(managerController.create.bind(managerController)),
);

AppRouter.post(
  '/team',
  DtoValidatorMiddleware(CreateTeamDto, 'BODY'),
  InterceptorAdapter(teamController.create.bind(teamController)),
);

export default AppRouter;
