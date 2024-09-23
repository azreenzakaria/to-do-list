import { Field, ObjectType } from '@nestjs/graphql';
import { ITaskList } from '../dto/projects.dto';

@ObjectType()
export class GetTaskResponse {
  @Field(() => [ITaskList])
  result: ITaskList[];
}

@ObjectType()
export class CrudTaskResponse {
  @Field()
  message: string;
}
