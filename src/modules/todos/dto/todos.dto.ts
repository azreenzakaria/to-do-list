import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class IItemList {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  isCompleted: boolean;
}
