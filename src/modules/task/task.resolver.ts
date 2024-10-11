import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskEntity } from 'src/infrastructure/entity/task.entity';
import { CrudTaskResponse, GetTaskResponse } from './graphql/task.response';
import { TaskService } from './task.service';
import { ITaskResolver } from './interface/task.interface';
import {
  CreateTaskInput,
  RemoveTaskInput,
  UpdateTaskInput,
} from './graphql/task.input';

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
