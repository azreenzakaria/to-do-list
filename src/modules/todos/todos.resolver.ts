import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoResponse, GetTodosResponse } from './graphql/todos.response';
import { TodosService } from './todos.service';
import { TodoEntity } from 'src/infrastructure/entity/todo.entity';
import { CreateTodoInput, RemoveTodoInput } from './graphql/todos.input';

@Resolver(() => TodoEntity)
export class TodoResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => GetTodosResponse)
  async getTodos(): Promise<GetTodosResponse> {
    return await this.todosService.getTodos();
  }

  @Mutation(() => CreateTodoResponse)
  async createTodo(
    @Args('createTodoInput') input: CreateTodoInput,
  ): Promise<CreateTodoResponse> {
    return await this.todosService.createTodo(input);
  }

  @Mutation(() => CreateTodoResponse)
  async updateTodo(
    @Args('createTodoInput') input: CreateTodoInput,
  ): Promise<CreateTodoResponse> {
    return await this.todosService.updateTodo(input);
  }

  @Mutation(() => CreateTodoResponse)
  async removeTodo(
    @Args('removeTodoInput') input: RemoveTodoInput,
  ): Promise<CreateTodoResponse> {
    return await this.todosService.removeTodo(input);
  }
}
