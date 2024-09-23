import {
  CreateTaskInput,
  UpdateTaskInput,
  RemoveTaskInput,
} from '../graphql/task.input';
import { GetTaskResponse, CrudTaskResponse } from '../graphql/task.response';

export interface ITaskResolver {
  getTask(): Promise<GetTaskResponse>;
  createTask(input: CreateTaskInput): Promise<CrudTaskResponse>;
  updateTask(input: UpdateTaskInput): Promise<CrudTaskResponse>;
  removeTask(input: RemoveTaskInput): Promise<CrudTaskResponse>;
}
