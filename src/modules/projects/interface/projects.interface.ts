import {
  CreateProjectInput,
  RemoveProjectInput,
  UpdateProjectInput,
} from '../graphql/projects.input';
import {
  CreateProjectResponse,
  GetProjectsResponse,
  RemoveProjectResponse,
  UpdateProjectResponse,
} from '../graphql/projects.response';

export interface IProjectResolver {
  getProject(): Promise<GetProjectsResponse>;
  createProject(input: CreateProjectInput): Promise<CreateProjectResponse>;
  updateProject(input: UpdateProjectInput): Promise<UpdateProjectResponse>;
  removeProject(input: RemoveProjectInput): Promise<RemoveProjectResponse>;
}
