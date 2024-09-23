import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from 'src/infrastructure/entity/item.entity';
import { Repository } from 'typeorm';
import { CrudItemResponse, GetItemResponse } from './graphql/item.response';
import { IItemList } from './dto/item.dto';
import {
  CreateItemInput,
  GetItemInput,
  RemoveItemInput,
} from './graphql/item.input';
import { TaskEntity } from 'src/infrastructure/entity/task.entity';
import { SYSTEM } from 'src/constants';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepo: Repository<ItemEntity>,
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>,
  ) {}

  async getItems(input: GetItemInput): Promise<GetItemResponse> {
    try {
      // Validation the id of the project
      const taskData = await this.taskRepo.findOneBy({
        id: input.taskId,
      });
      if (!taskData)
        throw new Error('No task available. Please contact support!');

      const itemData = await this.itemRepo.find({
        where: { task: { id: taskData.id } },
        order: { updatedDateTime: 'DESC' },
      });
      if (itemData.length === 0) throw new Error('No item Found!');

      const itemArr: IItemList[] = itemData.map(
        ({ id, name, isCompleted }) => ({
          id,
          name,
          isCompleted,
        }),
      );
      return { result: itemArr };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async createItem(input: CreateItemInput): Promise<CrudItemResponse> {
    try {
      const { name, isCompleted, taskId } = input;

      // Validation the id of the project
      const taskData = await this.taskRepo.findOneBy({ id: taskId });
      if (!taskData)
        throw new Error('No project available. Please contact support!');

      // Then add the record
      const newItem = new ItemEntity();
      newItem.createdBy = SYSTEM;
      newItem.name = name;
      newItem.isCompleted = isCompleted;
      newItem.task = taskData;
      await this.itemRepo.save(newItem);

      return { message: 'A Todo have been created successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async removeItem(input: RemoveItemInput): Promise<CrudItemResponse> {
    try {
      // Validate the id of todo
      const itemData = await this.itemRepo.findOneBy({
        id: input.id,
      });
      if (!itemData)
        throw new Error('Data is not available. Please contact support');

      // Update the record
      itemData.deletedBy = SYSTEM;
      itemData.deletedDateTime = new Date().toISOString();
      await this.itemRepo.save(itemData);

      return { message: 'A Todo have been deleted successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
