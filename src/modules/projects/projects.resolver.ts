import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskEntity } from 'src/infrastructure/entity/projects.entity';
import { CrudTaskResponse, GetTaskResponse } from './graphql/projects.response';
import { TaskService } from './projects.service';
import { ITaskResolver } from './interface/projects.interface';
import {
  CreateTaskInput,
  RemoveTaskInput,
  UpdateTaskInput,
} from './graphql/projects.input';

@Resolver(() => TaskEntity)
export class TaskResolver implements ITaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => GetTaskResponse)
  async getTask(): Promise<GetTaskResponse> {
    return await this.taskService.getTask();
  }

  @Mutation(() => CrudTaskResponse)
  async createTask(
    @Args('createTaskInput') input: CreateTaskInput,
  ): Promise<CrudTaskResponse> {
    return await this.taskService.createTask(input);
  }

  @Mutation(() => CrudTaskResponse)
  async updateTask(
    @Args('updateTaskInput') input: UpdateTaskInput,
  ): Promise<CrudTaskResponse> {
    return await this.taskService.updateTask(input);
  }

  @Mutation(() => CrudTaskResponse)
  async removeTask(
    @Args('removeTaskInput') input: RemoveTaskInput,
  ): Promise<CrudTaskResponse> {
    return await this.taskService.removeTask(input);
  }
}
