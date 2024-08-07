import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class IProjectList {
  @Field()
  id: string;

  @Field()
  title: string;
}
