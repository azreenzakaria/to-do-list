import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ITodoList {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field()
  priority: string;

  @Field()
  isDone: boolean;

  @Field(() => String, { nullable: true })
  dueDate?: string;

  @Field(() => String, { nullable: true })
  remarks?: string;
}
