import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrudTodoResponse, GetTodosResponse } from './graphql/todos.response';
import { TodosService } from './todos.service';
import { TodoEntity } from 'src/infrastructure/entity/todo.entity';
import {
  CreateTodoInput,
  GetTodoInput,
  RemoveTodoInput,
} from './graphql/todos.input';

@Resolver(() => TodoEntity)
export class TodoResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => GetTodosResponse)
  async getTodos(
    @Args('getTodoInput') input: GetTodoInput,
  ): Promise<GetTodosResponse> {
    return await this.todosService.getTodos(input);
  }

  @Mutation(() => CrudTodoResponse)
  async createTodo(
    @Args('createTodoInput') input: CreateTodoInput,
  ): Promise<CrudTodoResponse> {
    return await this.todosService.createTodo(input);
  }

  @Mutation(() => CrudTodoResponse)
  async updateTodo(
    @Args('createTodoInput') input: CreateTodoInput,
  ): Promise<CrudTodoResponse> {
    return await this.todosService.updateTodo(input);
  }

  @Mutation(() => CrudTodoResponse)
  async removeTodo(
    @Args('removeTodoInput') input: RemoveTodoInput,
  ): Promise<CrudTodoResponse> {
    return await this.todosService.removeTodo(input);
  }
}
