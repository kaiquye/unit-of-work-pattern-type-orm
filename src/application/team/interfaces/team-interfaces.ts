import { Column } from 'typeorm';

export interface ICreateTeamIn {
  name: string;
  created_by: string;
}

export type ICreateTeamOut = Promise<{
  id: string | number;
  name: string;
}>;

export interface IFindTeamByIdIn {
  id: string;
}
