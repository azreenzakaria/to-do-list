import { Field, ObjectType } from '@nestjs/graphql';
import { ITodoList } from '../dto/todos.dto';

@ObjectType()
export class GetTodosResponse {
  @Field(() => [ITodoList])
  result: ITodoList[];
}

@ObjectType()
export class CreateTodoResponse {
  @Field()
  message: string;
}
