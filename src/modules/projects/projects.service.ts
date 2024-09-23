import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/infrastructure/entity/projects.entity';
import { Repository } from 'typeorm';
import { ITaskList } from './dto/projects.dto';
import { GetTaskResponse } from './graphql/projects.response';
import {
  CreateTaskInput,
  UpdateTaskInput,
  RemoveTaskInput,
} from './graphql/projects.input';
import { SYSTEM } from 'src/constants';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>,
  ) {}

  async getTask(): Promise<GetTaskResponse> {
    try {
      const getNames: TaskEntity[] = await this.taskRepo.find({
        order: { updatedDateTime: 'DESC' },
      });
      if (getNames.length === 0) throw new Error('No task found');
      const todoList: ITaskList[] = getNames.map(({ id, name }) => ({
        id,
        name,
      }));
      return { result: todoList };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async createTask(createTaskInput: CreateTaskInput) {
    try {
      const newProject = new TaskEntity();
      newProject.name = createTaskInput.name;
      newProject.createdBy = SYSTEM;
      await this.taskRepo.save(newProject);
      return { message: 'A project have been created successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async updateTask(updateTaskInput: UpdateTaskInput) {
    try {
      const { id, name } = updateTaskInput;

      const currentData = await this.taskRepo.findOneBy({
        id: id,
      });

      if (!currentData)
        throw new Error('Data is not available. Please contact support');
      // Updating the record
      currentData.name = name;
      await this.taskRepo.save(currentData);
      return { message: 'A task have been updated successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async removeTask(removeTaskInput: RemoveTaskInput) {
    try {
      const currentData = await this.taskRepo.findOneBy({
        id: removeTaskInput.id,
      });
      if (!currentData)
        throw new Error('Data is not available. Please contact support');
      // Updating the record
      currentData.deletedBy = SYSTEM;
      currentData.deletedDateTime = new Date().toISOString();
      await this.taskRepo.save(currentData);
      return { message: 'A project have been removed successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
