export interface IFindManagerByIdIn {
  id: string;
}

export interface ICreateManagerIn {
  name: string;
  email: string;
  password: string;
  document: string;
  document_type: string;
  team_id: string;
  created_by: string;
}
