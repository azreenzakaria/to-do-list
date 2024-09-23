import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrudItemResponse, GetItemResponse } from './graphql/todos.response';
import { ItemService } from './todos.service';
import { ItemEntity } from 'src/infrastructure/entity/todo.entity';
import {
  CreateItemInput,
  GetItemInput,
  RemoveItemInput,
} from './graphql/todos.input';

@Resolver(() => ItemEntity)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => GetItemResponse)
  async getItems(
    @Args('getItemInput') input: GetItemInput,
  ): Promise<GetItemResponse> {
    return await this.itemService.getItems(input);
  }

  @Mutation(() => CrudItemResponse)
  async createItem(
    @Args('createItemInput') input: CreateItemInput,
  ): Promise<CrudItemResponse> {
    return await this.itemService.createItem(input);
  }

  @Mutation(() => CrudItemResponse)
  async removeItem(
    @Args('removeItemInput') input: RemoveItemInput,
  ): Promise<CrudItemResponse> {
    return await this.itemService.removeItem(input);
  }
}
