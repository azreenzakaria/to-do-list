import {
  CreateTaskInput,
  UpdateTaskInput,
  RemoveTaskInput,
} from '../graphql/projects.input';
import {
  GetTaskResponse,
  CrudTaskResponse,
} from '../graphql/projects.response';

export interface ITaskResolver {
  getTask(): Promise<GetTaskResponse>;
  createTask(input: CreateTaskInput): Promise<CrudTaskResponse>;
  updateTask(input: UpdateTaskInput): Promise<CrudTaskResponse>;
  removeTask(input: RemoveTaskInput): Promise<CrudTaskResponse>;
}
