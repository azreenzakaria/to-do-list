import { Field, ObjectType } from '@nestjs/graphql';
import { IItemList } from '../dto/todos.dto';

@ObjectType()
export class GetItemResponse {
  @Field(() => [IItemList])
  result: IItemList[];
}

@ObjectType()
export class CrudItemResponse {
  @Field()
  message: string;
}
