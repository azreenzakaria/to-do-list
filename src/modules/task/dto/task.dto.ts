import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ITaskList {
  @Field()
  id: string;

  @Field()
  name: string;
}
