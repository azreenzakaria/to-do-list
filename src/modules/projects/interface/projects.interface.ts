import { GetProjectsResponse } from '../graphql/projects.response';

export interface IProjectResolver {
  getProject(): Promise<GetProjectsResponse>;
}
