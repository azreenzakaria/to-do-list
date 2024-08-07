import { Field, ObjectType } from '@nestjs/graphql';
import { IProjectList } from '../dto/projects.dto';

@ObjectType()
export class GetProjectsResponse {
  @Field(() => [IProjectList])
  result: IProjectList[];
}

@ObjectType()
export class CreateProjectResponse {
  @Field()
  message: string;
}

@ObjectType()
export class UpdateProjectResponse {
  @Field()
  message: string;
}

@ObjectType()
export class RemoveProjectResponse {
  @Field()
  message: string;
}
