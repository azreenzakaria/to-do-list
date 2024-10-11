import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ITaskList {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  completedItem?: number;

  @Field()
  totalItem?: number;
}
