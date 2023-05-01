import { jest } from '@jest/globals';
import { Team } from '../../domain/models/team.model';
import { CreateTeamUseCase } from './create-team-use-case';

describe('create-team-use-case', () => {
  let service;
  let teamRep;
  let findManagerUseCase;

  beforeEach(() => {
    teamRep = {
      save: jest.fn(),
      findById: jest.fn(),
    };
    teamRep.save.mockResolvedValue(new Team());
    teamRep.findById.mockResolvedValue(new Team());

    findManagerUseCase = {
      execute: jest.fn(),
    };
    findManagerUseCase.execute.mockResolvedValue(true);

    service = new CreateTeamUseCase(teamRep, findManagerUseCase);
  });
});
